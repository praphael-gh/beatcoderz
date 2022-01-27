class Api::SoundsController < ApplicationController
  before_action :set_sound, only: %i[ show edit update destroy ]

  # GET /sounds or /sounds.json
  def index
    sounds = Sound.all
    render json: sounds, status: :ok
  end

  # GET /sounds/1 or /sounds/1.json
  def show
    selected_sound = Sound.find(params[:id])
    render json: selected_sound
  end

  # POST /sounds or /sounds.json
  def create
    new_audio = Sound.create(sound_params)
    render json: { new_audio: new_audio }
  end

  # PATCH/PUT /sounds/1 or /sounds/1.json
  

  # DELETE /sounds/1 or /sounds/1.json

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sound
      @sound = Sound.find(params[:id])
    end

    def featured_audio(sound)
      if sound.audio.attached?
        {
          url: rails_blob_url(sound.audio)
        }
      end
    end

    # Only allow a list of trusted parameters through.
    def sound_params
      params.permit(:name, :audio, :user_id, :sound_pack_id)
    end
end
