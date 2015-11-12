class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :dish
      t.integer :number_of_guests
      t.text :note

      t.timestamps null: false
    end
  end
end
