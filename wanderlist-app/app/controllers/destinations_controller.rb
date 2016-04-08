class DestinationsController < ApplicationController
	# show all the destinations
	def index
		respond_with Destination.all
	end

	# create a new destination using params from form input
	def create
		respond_with Destination.create(destination_params)
	end

	# show a destination using the id from params
	def show
		@destination = Destination.find(params[:id])
		@itineraries = @destination.itineraries
		object = {:destination => @destination, :itineraries => @itineraries}
		puts object
		respond_with @destination, object
	end

	private
	def destination_params
		params.require(:destination).permit(:name)
	end
end