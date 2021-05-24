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
  resources :messages, only: %i[create]
end
