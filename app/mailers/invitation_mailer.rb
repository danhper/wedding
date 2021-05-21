class InvitationMailer < ApplicationMailer
  default from: 'Ai & Daniel <ai-et-daniel@perezmiyuki.wedding>'
  layout 'mailer'

  def guest_invitation_email
    @user = params[:user]

    mail(to: @user.email, subject: @user.email_subject)
  end

  def change_status_email
    @user = params[:user]
    mail(to: Rails.application.config.organizer_email, subject: "Update from #{@user.first_name}")
  end
end
