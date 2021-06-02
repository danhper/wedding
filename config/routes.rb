Rails.application.routes.draw do
  namespace :admin do
    resources :users do
      post :send_invitation, on: :member
    end
    resources :messages

    root to: 'users#index'
  end
  root to: 'home#index'
  post '/attendance', to: 'home#set_attendance'

  post '/users/easter-egg', to: 'users#easter_egg'

  resources :messages, only: %i[create]

  match '/404', to: 'application#not_found', via: :all, as: 'not_found'
  match '/500', to: 'application#internal_error', via: :all, as: 'internal_error'
end
