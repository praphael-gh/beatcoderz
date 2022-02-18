Rails.application.routes.draw do
  namespace :api do
    get "/auth", to: "users#show"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    resources :sound_packs
    get "/default", to: "sound_packs#default"
    get "/default-audio", to: "sound_packs#default_audio"

    resources :sounds
    resources :users

    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
