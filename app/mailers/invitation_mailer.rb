class InvitationMailer < ApplicationMailer
  default from: 'Ai & Daniel <ai-et-daniel@perezmiyuki.wedding>'
  layout 'mailer'

  def guest_invitation_email
    @user = params[:user]

    mail(to: @user.email, subject: @user.email_subject)
  end
end
