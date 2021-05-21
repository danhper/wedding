# Preview all emails at http://localhost:3000/rails/mailers/invitation_mailer
class InvitationMailerPreview < ActionMailer::Preview
  def guest_invitation_email
    InvitationMailer.with(user: User.first).guest_invitation_email
  end
end
