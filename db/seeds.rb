# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.first_or_create(name: 'test', email: 'test@test.pl', password: 'password')
Todo.first_or_create(title: 'first', created_by: User.first.id)
Todo.first_or_create(title: 'second', created_by: User.first.id)