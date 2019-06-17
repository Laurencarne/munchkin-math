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
15.times do User.create(name: Faker::Name.unique.first_name, color: Faker::Color.color_name, age: Faker::Number.between(3, 8) )
end


# Seeding Test
addition101 = Test.create(name: "Basic Addition")

# Seeding Questions

additionQ1 = Question.create(test_id: 1, number: 1, question: "What does 2 + 3 equal?", correct_answer: "5", answer1: "4", answer2: "9", answer3: "1")
additionQ2 = Question.create(test_id: 1, number: 2, question: "What does 4 + 4 equal?", correct_answer: "8", answer1: "10", answer2: "5", answer3: "12")
additionQ3 = Question.create(test_id: 1, number: 3, question: "What does 1 + 7 equal?", correct_answer: "8", answer1: "3", answer2: "11", answer3: "10")
additionQ4 = Question.create(test_id: 1, number: 4, question: "What does 12 + 3 equal?", correct_answer: "15", answer1: "9", answer2: "17", answer3: "13")
additionQ5 = Question.create(test_id: 1, number: 5, question: "What does 3 + 4 equal?", correct_answer: "7", answer1: "6", answer2: "9", answer3: "15")
additionQ6 = Question.create(test_id: 1, number: 6, question: "What does 8 + 9 equal?", correct_answer: "17", answer1: "13", answer2: "11", answer3: "4")
additionQ7 = Question.create(test_id: 1, number: 7, question: "What does 2 + 11 equal?", correct_answer: "13", answer1: "5", answer2: "9", answer3: "12")


# Seeding UserTests

usertest1 =  UserTest.create(test_id: 1, user_id: 1, score: 50)