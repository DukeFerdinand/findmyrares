Rails.application.routes.draw do
  root "home#index"

  # Registration handlers
  get "/signup", to: "registrations#new"
  post "/signup", to: "registrations#create"
end
