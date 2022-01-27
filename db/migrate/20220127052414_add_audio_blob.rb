class AddAudioBlob < ActiveRecord::Migration[7.0]
  def change
    add_column :sounds, :audio_data, :text
  end
end
