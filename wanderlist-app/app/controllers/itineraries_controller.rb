class ItinerariesController < ApplicationController
	# show all the itineraries for a destination
	def index
		destination = Destination.find(params[:destination_id]) 
		itineraries = destination.Itinerary.all
		respond_with destination, itineraries
	end

	# show an itinerary using the id from params
	def show
		destination = Destination.find(params[:destination_id])
		intinerary = destination.Itinerary.find(params[:id])
		respond_with destination, itinerary
	end

	# provide form to create a new itinerary
	def new
		destination = Destination.find(params[:destination_id])
		itinerary = destination.itineraries.new
	end

	# create a new itinerary for a destination using params from form input
	def create
		destination = Destination.find(params[:destination_id])
		itinerary = destination.Itinerary.create(itinerary_params)
		respond_with destination, itinerary
	end

	# provide form to edit an existing itinerary
	def edit
		intinerary = Itinerary.find(params[:id])
	end

	# updates an itinerary
	def update
		itinerary = Itinerary.find(params[:id])
		itinerary_updated = itinerary.update_attributes(itinerary_params)
		respond_with itinerary_updated
	end

	# deletes an existing itinerary
	def destroy
		itinerary = Itinerary.find(params[:id])
		itinerary.destroy
	end

	private
	def destination_params
		params.require(:destination).permit(:name)
	end
end
