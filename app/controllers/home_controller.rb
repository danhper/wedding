class HomeController < ApplicationController
  def index
    @events = {
      townhall: Event.new(location: 'Mairie du 15ème', start_time: '15:40', end_time: '16:00',
                          text_key: 'townhall.text', image: 'mairie.jpg', address: '31 Rue Peclet, 75015 Paris',
                          map_url: 'https://goo.gl/maps/CjDdYubCeWa24vtZ7'),
      party: Event.new(location: 'Le Vauban', start_time: '18:00', end_time: '22:30',
                       text_key: 'party.text', image: 'vauban.jpg', address: '7 Place Vauban, 75007 Paris',
                       map_url: 'https://goo.gl/maps/Q33BYNyHqha4a9YMA'),
    }

    @images = Dir[Rails.root.join('app/assets/images/ai-dany/*')].map { |v| v.split('/')[-1] }
  end
end
