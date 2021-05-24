class ApplicationController < ActionController::Base
  rescue_from StandardError, with: :unexpected_error if Rails.env.production?
  rescue_from User::NotAuthorized, with: :deny_access

  def not_found
    render_error 'not_found', status: :not_found
  end

  protected

  def deny_access(_exception)
    render_error 'unauthorized', status: :unauthorized
  end

  def unexpected_error(_exception)
    render_error 'unexpected', status: :internal_server_error
  end

  def render_error(error, status:)
    @error = error
    render 'errors/error', status: status
  end

  def require_login
    @user = User.find_by(token: params[:token])
    raise User::NotAuthorized, 'user not found' if @user.nil?
  end
end
