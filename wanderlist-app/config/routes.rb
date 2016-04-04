Rails.application.routes.draw do
	root to: "application#angular"

	resources :destinations, only: [:create, :index, :show] do
		resources :itineraries do
			resources :activities
		end
	end

	resources :users

	get "/log-in", to: "sessions#new"
	post "/sessions", to: "sessions#create"
	delete "/log-out", to: "sessions#destroy", as: "sign_out"
end
