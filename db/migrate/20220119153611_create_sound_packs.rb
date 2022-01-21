class CreateSoundPacks < ActiveRecord::Migration[7.0]
  def change
    create_table :sound_packs do |t|

      t.string :name
      t.string :genre

      t.timestamps
    end
  end
end
