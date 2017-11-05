require 'sinatra'
require 'sinatra/json'
require 'sequel'
require 'json'

set :bind, '0.0.0.0'
set :port, 4000

DB = Sequel.connect('postgres://postgres:example@todo-list-db:5432/postgres')

def classes()
  DB[:classes]
end

get '/classes' do
  json classes.all
end

post '/classes' do
  klass = JSON.parse(request.body.read)

  record_id = DB[:classes].insert(klass)
  json DB[:classes].where(id: record_id).first
end

get '/classes/:id' do
  json DB[:classes].where(id: params['id']).first
end

patch '/classes/:id' do
  klass = JSON.parse(request.body.read)
  record = DB[:classes].where(id: params['id'])
  record.update(klass)
  json record.first
end

delete '/classes/:id' do
end

get '/classes/:id/entries' do
  json DB[:entries].where(class: params['id']).all
end

get '/entries' do
  json DB[:entries].all
end

