class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: 'Invalid Username/Password', status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: "I'm a teapot (Logout Failed)", status: 422
    end
  end
end
