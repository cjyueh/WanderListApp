class MakesIdForItineraries < ActiveRecord::Migration
  def change
  	add_column :itineraries, :destination_id, :integer
  	add_column :activities, :itinerary_id, :integer

  end
end
