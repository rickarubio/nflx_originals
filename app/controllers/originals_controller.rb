class OriginalsController < ApplicationController
  def index
    render json: Original.all
  end

  def randomize
    RandomizeOriginalsJob.perform_later

    render json: {}, status: :accepted
  end
end
