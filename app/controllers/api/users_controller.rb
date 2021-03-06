class Api::UsersController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index, :show, :create]
  # before_action :set_user, only: %i[ show edit update destroy ]

  # GET /users or /users.json
  def index
    users = User.all
    render json: users, status: :ok
  end

  # GET /users/1 or /users/1.json
  def show
    # byebug
    selected_user = User.find_by(id: session[:user_id])
    render json: selected_user, status: :ok
  end

  def create
    new_user = User.create(user_params)
    render json: new_user, status: :ok
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password)
    end
end
