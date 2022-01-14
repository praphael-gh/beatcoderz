class CreateSounds < ActiveRecord::Migration[7.0]
  def change
    create_table :sounds do |t|
      
      t.string :name
      t.string :sound

      t.references :user, :song
      t.timestamps
    end
  end
end
