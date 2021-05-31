class User < ApplicationRecord
  enum language: %i[en ja fr de fr_polite]
  enum attendance: %i[pending absent present]

  has_many :messages

  scope :invite_not_sent, -> { where(invite_sent: false) }

  before_save do
    self.token = generate_token if token.nil?
    self.email_text = email_text.gsub(/%{token}/, token)
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
