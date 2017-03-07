class CreateContent < ActiveRecord::Migration[5.0]
  def change
    create_table :contents do |t|
      t.string :title
      t.string :box_art_url
      t.integer :release_year
      t.string :maturity
      t.boolean :is_streaming
    end
  end
end
