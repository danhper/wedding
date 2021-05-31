class AddAfterPartyToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :after_party, :boolean, default: false, null: false
  end
end
