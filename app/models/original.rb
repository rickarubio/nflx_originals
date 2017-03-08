class Original < ApplicationRecord
  validates :title, :box_art_url, :release_year, :maturity, presence: true
end
