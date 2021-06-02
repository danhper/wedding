class AddEasterEggRankingToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :easter_egg_ranking, :integer
  end
end
