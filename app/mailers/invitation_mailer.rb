class InvitationMailer < ApplicationMailer
  default from: 'ai-et-daniel@perezmiyuki.wedding'
  layout 'mailer'

  def guest_invitation_email
    @user = params[:user]

    mail(to: @user.email, subject: I18n.t('email.invitation.subject'))
  end
end
