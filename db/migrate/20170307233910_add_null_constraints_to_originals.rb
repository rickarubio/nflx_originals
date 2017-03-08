class AddNullConstraintsToOriginals < ActiveRecord::Migration[5.0]
  def change
    change_column_null :originals, :title, false
    change_column_null :originals, :box_art_url, false
    change_column_null :originals, :release_year, false
    change_column_null :originals, :maturity, false
    change_column_null :originals, :is_streaming, false
  end
end
