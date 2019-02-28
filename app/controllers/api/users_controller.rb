class Api::UsersController < ApplicationController 
  before_action :require_login, except: [:create] 

  def index 
    @users = User.all 
    render json: @users 
  end 

  def create 
    @user = User.new(user_params) 

    if @user 
      login!(@user) 
      render :show 
    else 
      render json: @user.errors.full_messages, status: 422 
    end 
  end 

  def show 
    @user = User.find(params[:id]) 
    render :show 
  end 

  def verify_email_db 
    @user = User.find_by(email: params[:email]) 

    if @user 
      render json: 'true', status: 200  
    else 
      render json: 'false', status: 404  
    end 
  end 

  def destroy 
    # this feature will be implemented later 
  end 

  private 

  def user_params 
    params.require(:user).permit(:email, :password) 
  end 
end 
