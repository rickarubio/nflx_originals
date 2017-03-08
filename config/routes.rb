Rails.application.routes.draw do
  root 'high_voltage/pages#show', id: 'home'

  get 'pages/home' => 'high_voltage/pages#show', id: 'home'

  resources :originals, only: [:index]
end
