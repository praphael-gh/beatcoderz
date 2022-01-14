class Song < ApplicationRecord
    has_many :sounds
    has_many :users, through: :sounds
end
