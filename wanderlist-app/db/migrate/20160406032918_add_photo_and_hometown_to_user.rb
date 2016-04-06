class AddPhotoAndHometownToUser < ActiveRecord::Migration
  def change
    add_column :users, :photo, :string
    add_column :users, :hometown, :string
  end
end
