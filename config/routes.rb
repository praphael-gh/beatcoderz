Rails.application.routes.draw do
  resources :sound_packs, only: [:index, :show, :create, :update]
  resources :sounds, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :update, :destroy]
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
