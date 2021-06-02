class UsersController < ApplicationController
  before_action :require_login

  def easter_egg
    ranking = @user.easter_egg_ranking
    if ranking.nil?
      ranking = User.found_easter_egg.count + 1
      @user.easter_egg_ranking = ranking
      @user.save!
    end
    render json: { ranking: ranking }
  end
end
