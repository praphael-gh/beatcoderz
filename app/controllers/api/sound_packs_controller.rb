class Api::SoundPacksController < ApplicationController
  # before_action :set_sound_pack, only: %i[ show edit update destroy ]

  # GET /sound_packs or /sound_packs.json
  def index
    sound_packs = SoundPack.all
    render json: sound_packs, status: :ok
  end

  # GET /sound_packs/1 or /sound_packs/1.json
  def show
    selected_soundpack = SoundPack.find(params[:id])
    render json: selected_soundpack, status: :ok
  end

  def create
    new_pack = SoundPack.create(sound_pack_params)
    render json: new_pack, status: :created
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sound_pack
      sound_pack = SoundPack.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sound_pack_params
      params.permit(:id, :name, :genre)
    end
end
