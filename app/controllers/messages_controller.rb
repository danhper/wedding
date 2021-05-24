class MessagesController < ApplicationController
  before_action :require_login

  def create
    @user.messages.create(message_params)
  end

  private

  def message_params
    params.require(:message).permit(:message, :tx_hash)
  end
end
