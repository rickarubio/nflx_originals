Rails.application.routes.draw do
  root 'high_voltage/pages#show', id: 'home'

  get 'pages/home' => 'high_voltage/pages#show', id: 'home'

  post 'originals/randomize' => 'originals#randomize'

  resources :originals, only: [:index]

  mount ActionCable.server => '/cable'
end
