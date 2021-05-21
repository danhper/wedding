class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.integer :language, default: 0, null: false
      t.integer :attendance, default: 0, null: false
      t.boolean :townhall, default: false, null: false
      t.string :token
      t.string :greeting
      t.string :text
      t.string :email_subject
      t.string :email_text
      t.boolean :invite_sent, default: false, null: false

      t.index :token

      t.timestamps
    end
  end
end
