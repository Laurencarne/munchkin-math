# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seeding Users

lauren = User.create(name: "Lauren", color: "Purple", age: 5)
patrick = User.create(name: "Patrick", color: "Green", age: 4)

# Seeding UserTests

UserTest.create(userId: 1, testId: 1)
# Seeding Test
addition101 = Test.create(name: "Basic Addition")

# Seeding Questions

AdditionQ1 = Question.create(testId: 1, number: 1, question: "What does 2 + 3 equal?", correct_answer: "5", answer1: "4", answer2: "9", answer3: "1")
AdditionQ2 = Question.create(testId: 1, number: 2, question: "What does 4 + 4 equal?", correct_answer: "8", answer1: "10", answer2: "5", answer3: "12")
