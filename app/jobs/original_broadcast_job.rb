 class OriginalBroadcastJob < ApplicationJob
   queue_as :default

   def perform(original)
     ActionCable.server.broadcast 'OriginalsChannel', original
   end
 end
