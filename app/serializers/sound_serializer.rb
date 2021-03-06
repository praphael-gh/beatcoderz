class SoundSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :audio_url
  belongs_to :sound_pack

  # def audio_url
  #   return rails_blob_path(object.audio, only_path: true)
  # end
  
  def audio_url
    # byebug
    
    audio_data = "data:audio/wav; base64, " + object.audio_data
    return audio_data
  end
end
