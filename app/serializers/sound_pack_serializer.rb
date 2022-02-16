class SoundPackSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :sounds
  has_many :sounds
  belongs_to :user


  # def sounds
  #   Sound.with_attached_audio.where(sound_pack_id: audio.id)
  # end
end
