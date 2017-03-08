class OriginalsController < ApplicationController
  def index
    render json: Original.all
  end
end
