class Api::UsersController < ApplicationController 
  def index 
    @users = User.all 
    render json: @users 
  end 

  def create 
    @user = User.new(user_params) 

    if @user 
      login!(@user) 
      render json: @user 
    else 
      render json: @user.errors.full_messages, status: 422 
    end 
  end 

  def delete 
    # this feature will be implemented later 
  end 

  private 

  def user_params 
    params.require(:user).permit(:username, :password) 
  end 
end 
