class SoundSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :audio_url

  def audio_url
    return rails_blob_path(object.audio, only_path: true)
  end
  

end
