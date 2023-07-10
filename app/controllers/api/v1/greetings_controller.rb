class Api::V1::GreetingsController < ApplicationController
  def index
    random = Random.rand(1..5)
    @greeting = Greeting.find(random)
    render json: @greeting
  end
end