class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :user_id
      t.text :message
      t.string :tx_hash

      t.index :user_id

      t.timestamps
    end
  end
end
