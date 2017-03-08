require 'rails_helper'

describe HighVoltage::PagesController do
  context '#show' do
    describe 'home' do
      before do
        get :show, params: { id: 'home' }
      end

      it { should respond_with :success }
      it { should render_template 'pages/home' }
      it { should render_template 'layouts/application' }
    end
  end
end
