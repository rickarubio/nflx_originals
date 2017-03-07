class AddUniqueConstraintToOriginals < ActiveRecord::Migration[5.0]
  def change
    add_index :originals, :title, :unique => true
  end
end
