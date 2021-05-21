module Admin
  class UsersController < Admin::ApplicationController
    before_action :set_translations, only: %i[new edit create update]
    # Overwrite any of the RESTful controller actions to implement custom behavior
    # For example, you may want to send an email after a foo is updated.
    #
    # def update
    #   super
    #   send_foo_updated_email(requested_resource)
    # end

    def send_invitation
      InvitationMailer.with(user: requested_resource).guest_invitation_email.deliver_now
      requested_resource.invite_sent = true
      requested_resource.save!
      redirect_to [namespace, requested_resource], notice: "Email sent to #{requested_resource.email}"
    end

    protected

    def make_translations(lang)
      I18n.with_locale(lang) do
        {
          text: I18n.t('invitation.text'),
          email_subject: I18n.t('email.invitation.subject'),
          email_text: I18n.t('email.invitation.text')
        }
      end
    end

    def set_translations
      @translations = Hash[I18n.available_locales.map { |lang| [lang, make_translations(lang)] }]
    end

    def new_resource
      resource_class.new(
        text: I18n.t('invitation.text'),
        email_subject: I18n.t('email.invitation.subject'),
        email_text: I18n.t('email.invitation.text')
      )
    end

    # Override this method to specify custom lookup behavior.
    # This will be used to set the resource for the `show`, `edit`, and `update`
    # actions.
    #
    # def find_resource(param)
    #   Foo.find_by!(slug: param)
    # end

    # The result of this lookup will be available as `requested_resource`

    # Override this if you have certain roles that require a subset
    # this will be used to set the records shown on the `index` action.
    #
    # def scoped_resource
    #   if current_user.super_admin?
    #     resource_class
    #   else
    #     resource_class.with_less_stuff
    #   end
    # end

    # Override `resource_params` if you want to transform the submitted
    # data before it's persisted. For example, the following would turn all
    # empty values into nil values. It uses other APIs such as `resource_class`
    # and `dashboard`:
    #
    # def resource_params
    #   params.require(resource_class.model_name.param_key).
    #     permit(dashboard.permitted_attributes).
    #     transform_values { |value| value == "" ? nil : value }
    # end

    # See https://administrate-prototype.herokuapp.com/customizing_controller_actions
    # for more information
  end
end
