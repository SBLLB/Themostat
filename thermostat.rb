require 'sinatra' 
require 'net/http'

get '/' do
  erb :index
end

get '/weather' do 
	uri = URI('http://www.myweather2.com/developer/forecast.ashx?uac=UuJ5tIZAKz&output=json&query=SW1')
	Net::HTTP.get(uri)   
end