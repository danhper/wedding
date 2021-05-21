# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  first_name: 'Daniel',
  last_name: 'Perez',
  language: 'fr',
  townhall: true,
  email: 'daniel@perez.sh',
  text: 'Hi Daniel,
  Thank you for coming to our wedding.
  We are looking forward to seeing you.
  Ai & Daniel'
)
