class Api::UsersController < ApplicationController
  before_action :require_login, except: [:create, :verify_email_db]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 511
    end
  end

  # bonus feature to be added later
  def update
    @user = User.find(params[:id])
    # do stuff to update
    if @user.update
    else
    end
  end

  def destroy
    # this feature will be implemented later
  end

  def verify_email_db
    @user = User.find_by(email: params[:email])

    if @user
      render json: 'true', status: 200
    else
      render json: 'false', status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
