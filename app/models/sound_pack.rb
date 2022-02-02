class SoundPack < ApplicationRecord
    has_many :sounds, dependent: :destroy
    has_many :users, through: :sounds

    validates :name, presence: true, uniqueness: true
    validates :genre, presence: true, uniqueness: true
end
