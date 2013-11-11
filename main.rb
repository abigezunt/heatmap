require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'pry'


set :database, {adapter: 'postgresql',
                database: 'api_lab_development',
                host: 'localhost'}

class Facility < ActiveRecord::Base
end

get '/' do
  redirect_to '/index.html'	
end


get '/facilities.json' do
  Facility.all.to_json
end  