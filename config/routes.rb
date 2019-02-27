Rails.application.routes.draw do 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html 
  namespace :api, defaults: {} do 
    resources :users, only: [:index, :create, :show, :destroy] 
    resource :session, only: [:create, :destroy] 
  end 

  root to: "static_pages#main" 
end 
