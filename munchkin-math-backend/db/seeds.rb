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
additionTest = Test.create(name: "Basic Addition")
subtractionTest = Test.create(name: "Basic Subtraction")


# Seeding Questions

additionQ1 = Question.create(test_id: 1, number: 1, question: "What does 2 + 3 equal?", correct_answer: "5", answer1: "4", answer2: "9", answer3: "1")
additionQ2 = Question.create(test_id: 1, number: 2, question: "What does 4 + 4 equal?", correct_answer: "8", answer1: "10", answer2: "5", answer3: "12")
additionQ3 = Question.create(test_id: 1, number: 3, question: "What does 1 + 7 equal?", correct_answer: "8", answer1: "3", answer2: "11", answer3: "10")
additionQ4 = Question.create(test_id: 1, number: 4, question: "What does 12 + 3 equal?", correct_answer: "15", answer1: "9", answer2: "17", answer3: "13")
additionQ5 = Question.create(test_id: 1, number: 5, question: "What does 3 + 4 equal?", correct_answer: "7", answer1: "6", answer2: "9", answer3: "15")
additionQ6 = Question.create(test_id: 1, number: 6, question: "What does 8 + 9 equal?", correct_answer: "17", answer1: "13", answer2: "11", answer3: "4")
additionQ7 = Question.create(test_id: 1, number: 7, question: "What does 2 + 11 equal?", correct_answer: "13", answer1: "5", answer2: "9", answer3: "12")
additionQ8 = Question.create(test_id: 1, number: 8, question: "What does 1 + 1 equal?", correct_answer: "2", answer1: "5", answer2: "0", answer3: "11")
additionQ9 = Question.create(test_id: 1, number: 9, question: "What does 2 + 2 equal?", correct_answer: "4", answer1: "22", answer2: "8", answer3: "14")
additionQ10 = Question.create(test_id: 1, number: 10, question: "What does 2 + 10 equal?", correct_answer: "12", answer1: "2", answer2: "3", answer3: "15")

additionQ11 = Question.create(test_id: 1, number: 11, question: "What does 4 + 3 equal?", correct_answer: "7", answer1: "4", answer2: "9", answer3: "1")
additionQ12 = Question.create(test_id: 1, number: 12, question: "What does 2 + 4 equal?", correct_answer: "6", answer1: "10", answer2: "5", answer3: "12")
additionQ13 = Question.create(test_id: 1, number: 13, question: "What does 4 + 7 equal?", correct_answer: "11", answer1: "3", answer2: "8", answer3: "9")
additionQ14 = Question.create(test_id: 1, number: 14, question: "What does 2 + 5 equal?", correct_answer: "7", answer1: "9", answer2: "17", answer3: "4")
additionQ15 = Question.create(test_id: 1, number: 15, question: "What does 4 + 3 equal?", correct_answer: "7", answer1: "6", answer2: "9", answer3: "15")
additionQ16 = Question.create(test_id: 1, number: 16, question: "What does 1 + 9 equal?", correct_answer: "10", answer1: "13", answer2: "11", answer3: "4")
additionQ17 = Question.create(test_id: 1, number: 17, question: "What does 2 + 8 equal?", correct_answer: "10", answer1: "5", answer2: "9", answer3: "12")
additionQ18 = Question.create(test_id: 1, number: 18, question: "What does 3 + 3 equal?", correct_answer: "6", answer1: "5", answer2: "0", answer3: "11")
additionQ19 = Question.create(test_id: 1, number: 19, question: "What does 4 + 4 equal?", correct_answer: "8", answer1: "22", answer2: "13", answer3: "14")
additionQ20 = Question.create(test_id: 1, number: 20, question: "What does 2 + 10 equal?", correct_answer: "11", answer1: "2", answer2: "3", answer3: "6")

additionQ21 = Question.create(test_id: 1, number: 21, question: "What does 10 + 3 equal?", correct_answer: "13", answer1: "4", answer2: "9", answer3: "17")
additionQ22 = Question.create(test_id: 1, number: 22, question: "What does 11 + 4 equal?", correct_answer: "15", answer1: "10", answer2: "5", answer3: "12")
additionQ23 = Question.create(test_id: 1, number: 23, question: "What does 1 + 7 equal?", correct_answer: "8", answer1: "3", answer2: "17", answer3: "9")
additionQ24 = Question.create(test_id: 1, number: 24, question: "What does 3 + 5 equal?", correct_answer: "8", answer1: "9", answer2: "17", answer3: "4")
additionQ25 = Question.create(test_id: 1, number: 25, question: "What does 1 + 3 equal?", correct_answer: "4", answer1: "6", answer2: "9", answer3: "5")
additionQ26 = Question.create(test_id: 1, number: 26, question: "What does 11 + 9 equal?", correct_answer: "20", answer1: "13", answer2: "11", answer3: "4")
additionQ27 = Question.create(test_id: 1, number: 27, question: "What does 10 + 10 equal?", correct_answer: "20", answer1: "5", answer2: "9", answer3: "12")
additionQ28 = Question.create(test_id: 1, number: 28, question: "What does 5 + 5 equal?", correct_answer: "10", answer1: "5", answer2: "0", answer3: "11")
additionQ29 = Question.create(test_id: 1, number: 29, question: "What does 6 + 6 equal?", correct_answer: "12", answer1: "18", answer2: "13", answer3: "14")
additionQ30 = Question.create(test_id: 1, number: 30, question: "What does 8 + 10 equal?", correct_answer: "18", answer1: "14", answer2: "10", answer3: "6")





subtractionQ1 = Question.create(test_id: 2, number: 31, question: "What does 12 - 3 equal?", correct_answer: "9", answer1: "4", answer2: "15", answer3: "1")
subtractionQ2 = Question.create(test_id: 2, number: 32, question: "What does 4 - 4 equal?", correct_answer: "0", answer1: "2", answer2: "8", answer3: "3")
subtractionQ3 = Question.create(test_id: 2, number: 33, question: "What does 12 - 7 equal?", correct_answer: "5", answer1: "10", answer2: "3", answer3: "8")
subtractionQ4 = Question.create(test_id: 2, number: 34, question: "What does 8 - 6 equal?", correct_answer: "2", answer1: "9", answer2: "17", answer3: "6")
subtractionQ5 = Question.create(test_id: 2, number: 35, question: "What does 4 - 3 equal?", correct_answer: "1", answer1: "7", answer2: "12", answer3: "4")
subtractionQ6 = Question.create(test_id: 2, number: 36, question: "What does 18 - 6 equal?", correct_answer: "12", answer1: "9", answer2: "10", answer3: "15")
subtractionQ7 = Question.create(test_id: 2, number: 37, question: "What does 5 - 2 equal?", correct_answer: "3", answer1: "5", answer2: "9", answer3: "7")
subtractionQ8 = Question.create(test_id: 2, number: 38, question: "What does 4 - 2 equal?", correct_answer: "2", answer1: "7", answer2: "12", answer3: "4")
subtractionQ9 = Question.create(test_id: 2, number: 39, question: "What does 7 - 6 equal?", correct_answer: "1", answer1: "0", answer2: "3", answer3: "15")
subtractionQ10 = Question.create(test_id: 2, number: 40, question: "What does 2 - 2 equal?", correct_answer: "0", answer1: "5", answer2: "4", answer3: "7")

subtractionQ11 = Question.create(test_id: 2, number: 41, question: "What does 12 - 1 equal?", correct_answer: "11", answer1: "4", answer2: "15", answer3: "1")
subtractionQ12 = Question.create(test_id: 2, number: 42, question: "What does 4 - 1 equal?", correct_answer: "3", answer1: "2", answer2: "8", answer3: "5")
subtractionQ13 = Question.create(test_id: 2, number: 43, question: "What does 12 - 6 equal?", correct_answer: "6", answer1: "10", answer2: "3", answer3: "8")
subtractionQ14 = Question.create(test_id: 2, number: 44, question: "What does 8 - 6 equal?", correct_answer: "2", answer1: "9", answer2: "17", answer3: "6")
subtractionQ15 = Question.create(test_id: 2, number: 45, question: "What does 4 - 0 equal?", correct_answer: "4", answer1: "7", answer2: "12", answer3: "1")
subtractionQ16 = Question.create(test_id: 2, number: 46, question: "What does 18 - 8 equal?", correct_answer: "10", answer1: "9", answer2: "6", answer3: "15")
subtractionQ17 = Question.create(test_id: 2, number: 47, question: "What does 15 - 2 equal?", correct_answer: "13", answer1: "15", answer2: "9", answer3: "17")
subtractionQ18 = Question.create(test_id: 2, number: 48, question: "What does 14 - 12 equal?", correct_answer: "2", answer1: "7", answer2: "12", answer3: "4")
subtractionQ19 = Question.create(test_id: 2, number: 49, question: "What does 17 - 16 equal?", correct_answer: "1", answer1: "0", answer2: "3", answer3: "15")
subtractionQ20 = Question.create(test_id: 2, number: 50, question: "What does 12 - 12 equal?", correct_answer: "0", answer1: "5", answer2: "4", answer3: "7")

subtractionQ21 = Question.create(test_id: 2, number: 51, question: "What does 12 - 11 equal?", correct_answer: "1", answer1: "4", answer2: "4", answer3: "1")
subtractionQ22 = Question.create(test_id: 2, number: 52, question: "What does 8 - 1 equal?", correct_answer: "7", answer1: "2", answer2: "8", answer3: "5")
subtractionQ23 = Question.create(test_id: 2, number: 53, question: "What does 12 - 10 equal?", correct_answer: "2", answer1: "10", answer2: "3", answer3: "8")
subtractionQ24 = Question.create(test_id: 2, number: 54, question: "What does 18 - 9 equal?", correct_answer: "9", answer1: "10", answer2: "17", answer3: "6")
subtractionQ25 = Question.create(test_id: 2, number: 55, question: "What does 9 - 0 equal?", correct_answer: "9", answer1: "7", answer2: "12", answer3: "1")
subtractionQ26 = Question.create(test_id: 2, number: 56, question: "What does 20 - 3 equal?", correct_answer: "17", answer1: "9", answer2: "6", answer3: "15")
subtractionQ27 = Question.create(test_id: 2, number: 57, question: "What does 19 - 14 equal?", correct_answer: "5", answer1: "7", answer2: "9", answer3: "17")
subtractionQ28 = Question.create(test_id: 2, number: 58, question: "What does 14 - 5 equal?", correct_answer: "9", answer1: "7", answer2: "12", answer3: "4")
subtractionQ29 = Question.create(test_id: 2, number: 59, question: "What does 18 - 16 equal?", correct_answer: "2", answer1: "0", answer2: "3", answer3: "15")
subtractionQ30 = Question.create(test_id: 2, number: 60, question: "What does 16 - 3 equal?", correct_answer: "13", answer1: "10", answer2: "4", answer3: "9")

# Seeding UserTests

20.times do  UserTest.create(test_id: Test.all.sample.id, user_id: User.all.sample.id, score: 0)
end