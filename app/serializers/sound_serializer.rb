class SoundSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :audio_url

  # def audio_url
  #   return rails_blob_path(object.audio, only_path: true)
  # end
  
  def audio_url
    # byebug
    audio_file = object.audio_data.tempfile.open.read.force_encoding(Encoding::UTF_8)
    encoded_file = Base64.encode64(audio_file)
    audio_data = encoded_file
    return audio_data
  end
end
