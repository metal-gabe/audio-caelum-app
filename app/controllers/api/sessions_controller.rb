class Api::SessionsController < ApplicationController 
  def create 
    user = User.find_by_credentials( 
      params[:user][:username], 
      params[:user][:password] 
    ) 

    if user 
      login!(user) 
      render json: user 
    else 
      render json: '422: invalid username/password' 
    end 
  end 

  def destroy 
    if current_user 
      logout! 
      render json: {} 
    else 
      render json: "418: I'm a teapot (logout failed)" 
    end 
  end 
end 
