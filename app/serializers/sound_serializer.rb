class SoundSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :audio_url

  # def audio_url
  #   return rails_blob_path(object.audio, only_path: true)
  # end
  
  def audio_url
    # byebug
    audio_file = object.audio_data
    audio_data = "data:audio/wav; base64, " + audio_file
    return audio_data
  end
end
