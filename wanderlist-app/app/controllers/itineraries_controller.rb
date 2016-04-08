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
		itinerary = destination.Itinerary.find(params[:id])
		respond_with destination, itinerary
	end

	# create a new itinerary for a destination using params from form input
	def create
		# binding.pry
		destId = params[:destination_id]
		destination = Destination.find_by_id(destId)
		itinerary = Itinerary.create(itinerary_params)
		activity = Activity.create(activity_params)
		destination << itinerary
		destination.save
		itinerary << activity
		itinerary.save
		binding.pry
		respond_with itinerary
	end

	# provide form to edit an existing itinerary
	def edit
		itinerary = Itinerary.find(params[:id])
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
	def itinerary_params
		params.require(:itinerary).permit(:tags)
	end
	def activity_params
		params.require(:activity)
	end
end
