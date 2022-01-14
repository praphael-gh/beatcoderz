class User < ApplicationRecord
    has_many :sounds
    has_many :songs, through: :sounds

    
end
