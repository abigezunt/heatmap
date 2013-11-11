require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader'
require 'pry'

set :database, {adapter: 'postgresql',
                                        database: 'api_lab_development',
                                        host: 'localhost'}

# class Dog < ActiveRecord::Base
# end

# get '/dogs.json' do
#      Dog.all.to_json
# end  
# get '/dogs/:id' do
#      Dog.find(params[:id]).to_json
# end

# get '/old-gregg' do
#   {name: "Old Gregg"}.to_json
# end 
