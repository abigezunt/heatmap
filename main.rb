require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  redirect_to '/index.html'	
end
