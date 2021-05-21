class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :language, default: 'en', null: false
      t.string :coming, default: 'pending', null: false
      t.string :token
      t.string :text
      t.string :email

      t.index :token

      t.timestamps
    end
  end
end
