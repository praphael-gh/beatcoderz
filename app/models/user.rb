class User < ApplicationRecord
    has_secure_password
    # include ActiveModel::SecurePassword 
    has_many :sounds
    has_many :sound_packs

    validates :username, uniqueness: true
    # validates :password_digest, presence: true
    
    
    # attr_accessor :password_digest
end
