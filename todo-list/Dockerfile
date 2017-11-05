FROM ruby:2.4

COPY Gemfile* /build/
WORKDIR /build
RUN bundle install

WORKDIR /app

CMD rerun --background main.rb
