Rails.application.routes.draw do
  namespace :api do
    get "/auth", to: "users#show"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
        
    resources :sound_packs
    # get "/user/sound_packs", to: "sound_packs#index"

    resources :sounds
    resources :users
    # root 'welcome#index'
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
