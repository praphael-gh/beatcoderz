class SongsWithSoundsSerializer < ActiveModel::Serializer
    attributes :id, :name, :genre
    has_many :sounds
end