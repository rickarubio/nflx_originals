class OriginalsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'OriginalsChannel'
  end
end
