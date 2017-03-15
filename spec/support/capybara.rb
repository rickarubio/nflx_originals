require 'capybara/rails'
require 'capybara/rspec'

Capybara.default_wait_time = 3
Capybara.javascript_driver = :webkit
Capybara::Angular.default_wait_time = 6

RSpec.configure do |config|
  config.include Capybara::Angular::DSL, type: :feature
end
