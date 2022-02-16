class SoundPack < ApplicationRecord
    has_many :sounds, dependent: :destroy
    belongs_to :user

    validates :name, presence: true, uniqueness: true
    validates :genre, presence: true, uniqueness: true
end
