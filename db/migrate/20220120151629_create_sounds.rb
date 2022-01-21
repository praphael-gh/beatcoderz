class CreateSounds < ActiveRecord::Migration[7.0]
  def change
    create_table :sounds do |t|
      t.string :name

      t.references :user, :sound_pack


      t.timestamps
    end
  end
end
