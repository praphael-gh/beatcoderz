class SoundPackSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :sounds
  has_many :sounds

  # def sounds
  #   Sound.with_attached_audio.where(sound_pack_id: audio.id)
  # end
end
