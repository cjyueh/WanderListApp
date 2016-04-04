class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.string :tags, array: true, default: []

      t.timestamps null: false
    end
  end
end
