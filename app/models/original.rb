class Original < ApplicationRecord
  validates :title, :box_art_url, :release_year, :maturity, presence: true
  after_update_commit { OriginalBroadcastJob.perform_later self }
end
