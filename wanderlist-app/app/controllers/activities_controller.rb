class ActivitiesController < ApplicationController
	# show all the activities for a itinerary
	def index
		# Do I need destination = Destination.find(params[:destination_id])
		# itinerary = destination.Itinerary.find(params[:itinerary_id])
		# activities = destination.itinerary.Activity.all
		# respond_with destination, itinerary, activities
		itinerary = Itinerary.find(params[:itinerary_id]) 
		activities = itinerary.Activity.all
		respond_with itinerary, activities
	end

	# provide form to create a new activity
	def new
		itinerary = Itinerary.find(params[:itinerary_id])
		activity = itinerary.activities.new
	end

	# create a new activity for a itinerary using params from form input
	def create
		itinerary = Itinerary.find(params[:itinerary_id])
		activity = itinerary.Activity.create(activity_params)
		respond_with itinerary, activity
	end

	# provide form to edit an existing activity
	def edit
		activity = Activity.find(params[:id])
	end

	# updates an activity
	def update
		activity = Activity.find(params[:id])
		activity_updated = activity.update_attributes(activity_params)
		respond_with activity_updated
	end

	# deletes an existing activity
	def destroy
		activity = Activity.find(params[:id])
		activity.destroy
	end

	private
	def activity_params
		params.require(:activity).permit(:title, :tip, :location, :photo, :highlight)
	end
end