# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.find_or_create_by(name: 'test') do |user|
   user.email =  'test@test.pl'
   user.password = 'password'
end
User.find_or_create_by(name: 'test2') do |user|
  user.email = 'test2@test.pl'
  user.password = 'password'
end
Todo.find_or_create_by(title: 'first', created_by: User.first.id)
Todo.find_or_create_by(title: 'second', created_by: User.second.id)