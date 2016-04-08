class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.text :tags, array: true, default: []

      t.timestamps null: false
    end
  end
end
