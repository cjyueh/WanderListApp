class ChangeItinTagsStringToText < ActiveRecord::Migration
  def change
  	change_column :itineraries, :tags, :text
  end
end
