Rails.application.config.action_mailer.smtp_settings = {
  address: 'email-smtp.eu-west-1.amazonaws.com',
  port: 587,
  domain: 'perezmiyuki.wedding',
  user_name: ENV.fetch('SMTP_USER_NAME'),
  password: ENV.fetch('SMTP_PASSWORD'),
  authentication: 'plain',
  enable_starttls_auto: true
}
Rails.application.config.action_mailer.default_url_options = { host: 'perezmiyuki.wedding', protocol: 'https://', only_path: false }
Rails.application.config.action_mailer.asset_host = 'https://perezmiyuki.wedding'
