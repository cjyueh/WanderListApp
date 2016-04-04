class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :title
      t.string :tip
      t.string :location
      t.string :photo
      t.boolean :highlight

      t.timestamps null: false
    end
  end
end
