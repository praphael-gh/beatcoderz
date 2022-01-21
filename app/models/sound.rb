class Sound < ApplicationRecord
  has_one_attached :audio



  belongs_to :user
  belongs_to :sound_pack
end
