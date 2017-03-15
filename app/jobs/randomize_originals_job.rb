class RandomizeOriginalsJob < ApplicationJob
  queue_as :default

  def perform
    Original.all.each do |original|
      original.is_streaming = [true, false].sample
      original.save
    end
  end
end
