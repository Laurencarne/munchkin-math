Rails.application.routes.draw do
  resources :user_tests, only: [:index, :show, :create]
  resources :questions, only: [:index, :show]
  resources :tests, only: [:index, :show]
  resources :users
end
