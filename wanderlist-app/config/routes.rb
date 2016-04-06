Rails.application.routes.draw do
  devise_for :users
	root to: "application#angular"

	resources :destinations, only: [:create, :index, :show] do
		resources :itineraries, :except => [:edit, :update, :destroy] do
			resources :activities, :except => [:show, :edit, :update, :destroy]
		end
	end

	resources :itineraries, only: [:edit, :update, :destroy]

	resources :activities, only: [:edit, :update, :destroy]

	# resources :users

	# get "/log-in", to: "sessions#new"
	# post "/sessions", to: "sessions#create"
	# delete "/log-out", to: "sessions#destroy", as: "sign_out"
end
