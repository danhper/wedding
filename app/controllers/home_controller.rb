class HomeController < ApplicationController
  before_action :require_login
  around_action :switch_locale

  def index
    @events = {
      townhall: Event.new(location: 'Mairie du 15ème', start_time: '15:40', end_time: '16:00',
                          text_key: 'townhall.text', image: 'mairie.jpg', address: '31 Rue Peclet, 75015 Paris',
                          map_url: 'https://goo.gl/maps/CjDdYubCeWa24vtZ7'),
      party: Event.new(location: 'Hôtel Raphael', start_time: '18:00', end_time: '22:00',
                       text_key: 'party.text', image: 'hotel-raphael.jpg', address: '17 Avenue Kléber, 75116 Paris',
                       map_url: 'https://goo.gl/maps/oQ7cDkUfZMWJJrDK7'),
      after_party: Event.new(location: 'Suite in Hôtel Raphael', start_time: '22:00', end_time: '😵',
                             text_key: 'after_party.text', image: 'hotel-raphael-suite.jpg', address: '17 Avenue Kléber, 75116 Paris',
                             map_url: 'https://goo.gl/maps/oQ7cDkUfZMWJJrDK7')
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

  def switch_locale(&action)
    I18n.with_locale(@user.language, &action)
  end
end
