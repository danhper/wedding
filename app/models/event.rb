class Event
  attr_accessor :location_key, :start_time, :end_time, :text_key, :image, :address, :map_url

  def initialize(location_key:, start_time:, end_time:,
                 text_key:, image:, address:, map_url:)
    @location_key = location_key
    @start_time = start_time
    @end_time = end_time
    @text_key = text_key
    @image = image
    @address = address
    @map_url = map_url
  end
end
