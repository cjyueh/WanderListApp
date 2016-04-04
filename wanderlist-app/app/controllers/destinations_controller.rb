class DestinationsController < ApplicationController
	# GET all the destinations as json
	def index
		respond_with Destination.all
	end
	# POST to create a new destination using params from form input
	def create
		respond_with Destination.create(destination_params)
	end
	# GET a destination using the id from params
	def show
		respond_with Destination.find(params[:id])
	end

	private
	def destination_params
		params.require(:destination).permit(:name)
	end
end