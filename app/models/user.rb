class User < ApplicationRecord
  enum language: %i[en ja fr de fr_polite]
  enum attendance: %i[pending absent present]

  before_create do
    self.token = generate_token
  end

  protected

  def generate_token
    self.token = loop do
      random_token = SecureRandom.urlsafe_base64(nil, false)
      break random_token unless User.exists?(token: random_token)
    end
  end

  class NotAuthorized < StandardError
  end
end
