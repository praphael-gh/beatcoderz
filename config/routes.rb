Rails.application.routes.draw do
  resources :songs, only: [:index, :show, :create, :update]
  resources :sounds, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :update, :destroy]
end
