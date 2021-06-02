require 'administrate/base_dashboard'

class UserDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    first_name: Field::String,
    last_name: Field::String,
    email: Field::String,
    language: Field::Select.with_options(collection: User.languages.keys),
    attendance: Field::Select.with_options(collection: User.attendances.keys),
    townhall: Field::Boolean,
    after_party: Field::Boolean,
    token: Field::String,
    easter_egg_ranking: Field::Number,
    invite_sent: Field::Boolean,
    greeting: Field::String,
    text: Field::Text,
    email_subject: Field::String,
    email_text: Field::Text,
    created_at: Field::DateTime,
    updated_at: Field::DateTime
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    first_name
    last_name
    email
    invite_sent
    townhall
    after_party
    attendance
    easter_egg_ranking
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    first_name
    last_name
    email
    language
    attendance
    townhall
    after_party
    token
    invite_sent
    greeting
    text
    email_subject
    email_text
    easter_egg_ranking
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    first_name
    last_name
    language
    townhall
    after_party
    attendance
    email
    greeting
    text
    email_subject
    email_text
    easter_egg_ranking
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {
    invite_not_sent: ->(resources) { resources.invite_not_sent }
  }.freeze

  # Overwrite this method to customize how users are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(user)
  #   "User ##{user.id}"
  # end
end
