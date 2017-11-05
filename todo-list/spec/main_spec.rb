require_relative '../main.rb'
require 'rspec'
require 'rack/test'

RSpec.describe 'Todo App' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it "says hello" do
    get "/classes"
    expect(last_response).to be_ok
  end
end
