Rails.application.routes.draw do
  namespace :admin do
    resources :users

    root to: 'users#index'
  end
  root to: 'home#index'
end
