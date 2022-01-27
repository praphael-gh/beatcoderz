class SoundSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :audio_url

  # def audio_url
  #   return rails_blob_path(object.audio, only_path: true)
  # end
  
  def audio_url
    audio_data = ("data:audio/wav; base64, " + object.audio_data).to_s
    return audio_data
  end
end
