Rails.application.routes.draw do
  # namespace :api do
      resources :sound_packs
      resources :sounds
      resources :users
      
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"

      # root 'welcome#index'
      
      # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # end
end
