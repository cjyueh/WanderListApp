class DestinationsController < ApplicationController
	# GET all the destinations as json
	def index
		respond_with Destination.all
	end

	def create
		respond_with Destination.create(Destination_params)
end