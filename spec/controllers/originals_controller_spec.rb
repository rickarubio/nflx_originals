require 'rails_helper'

describe OriginalsController do
  describe '#index' do
    it 'renders json list of all originals' do
      get :index

      originals = JSON.parse(response.body)
      expect(originals.count).to eq(Original.count)
      expect(originals.first.keys.sort).to eq(Original.column_names.sort)
      expect(response).to have_http_status(:ok)
    end
  end
end
