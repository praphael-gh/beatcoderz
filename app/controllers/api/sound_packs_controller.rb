class Api::SoundPacksController < ApplicationController
  before_action :authorized
  skip_before_action :authorized, only: [:index, :show, :default, :default_audio, :create, :destroy]
  # before_action :set_sound_pack, only: %i[ show edit update destroy ]

  # GET /sound_packs or /sound_packs.json
  def index
    default_packs = SoundPack.where(user_id: User.first.id)
    user_packs = SoundPack.where(user_id: session[:user_id])
    sound_packs = default_packs + user_packs
    render json: sound_packs, status: :ok
  end

  # GET /sound_packs/1 or /sound_packs/1.json
  def show
    default_soundpack = SoundPack.where(id:params[:id], user_id: User.first.id)
    user_soundpack = SoundPack.where(id:params[:id], user_id: session[:user_id])
    all_packs = default_soundpack + user_soundpack

    if User.find(session[:user_id]).sound_packs.length() < 1 
      render json: default_soundpack, status: :ok
    elsif User.find(session[:user_id]).username === "Joe"
      render json: default_soundpack, status: :ok
    else
      render json: all_packs, status: :ok
    end
    
  end

  

  def create
    new_pack = SoundPack.create(sound_pack_params)
    render json: new_pack, status: :created
  end

  def destroy
    selected_pack = SoundPack.find(params[:id])
    destroyed_pack = selected_pack.destroy
    render json: selected_pack, status: :not_found
  end


  private
    # Use callbacks to share common setup or constraints between actions.

    def set_sound_pack
      sound_pack = SoundPack.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sound_pack_params
      params.permit(:id, :name, :genre, :user_id)
    end
end
