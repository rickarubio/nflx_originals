require 'rails_helper'

feature 'Home' do
  context 'Visitor visits the root page' do
    xscenario 'sees welcome message' do
      visit '/'

      expect(page).to have_content 'Hello nflx!'
    end
  end
end
