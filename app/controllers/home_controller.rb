class HomeController < ApplicationController
  before_action :require_login
  around_action :switch_locale

  def index
    @events = {
      townhall: Event.new(location: 'Mairie du 15ème', start_time: '15:40', end_time: '16:00',
                          text_key: 'townhall.text', image: 'mairie.jpg', address: '31 Rue Peclet, 75015 Paris',
                          map_url: 'https://goo.gl/maps/CjDdYubCeWa24vtZ7'),
      party: Event.new(location: 'Le Vauban', start_time: '18:00', end_time: '22:30',
                       text_key: 'party.text', image: 'vauban.jpg', address: '7 Place Vauban, 75007 Paris',
                       map_url: 'https://goo.gl/maps/Q33BYNyHqha4a9YMA')
    }

    @images = Dir[Rails.root.join('app/assets/images/ai-dany/*')].map { |v| v.split('/')[-1] }
  end

  def set_attendance
    @user.attendance = params[:attendance]
    @user.save
    InvitationMailer.with(user: @user).change_status_email.deliver_now
    redirect_to action: :index, token: @user.token
  end

  private

  def require_login
    @user = User.find_by(token: params[:token])
    raise User::NotAuthorized, 'user not found' if @user.nil?
  end

  def switch_locale(&action)
    I18n.with_locale(@user.language, &action)
  end
end
