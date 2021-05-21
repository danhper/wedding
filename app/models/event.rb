class Event
  attr_accessor :location, :start_time, :end_time, :text_key, :image, :address, :map_url

  def initialize(location:, start_time:, end_time:, text_key:, image:, address:, map_url:)
    @location = location
    @start_time = start_time
    @end_time = end_time
    @text_key = text_key
    @image = image
    @address = address
    @map_url = map_url
  end
end
