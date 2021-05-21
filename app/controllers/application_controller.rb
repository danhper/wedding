class ApplicationController < ActionController::Base
  rescue_from StandardError, with: :unexpected_error
  rescue_from User::NotAuthorized, with: :deny_access

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
end
