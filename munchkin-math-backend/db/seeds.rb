# AVATAR OBJECT
avatar = ["https://i.imgur.com/FH0SJMM.png", "https://i.imgur.com/tTpEPBa.png", "https://i.imgur.com/LnDRhUl.png", "https://i.imgur.com/smtuHn5.png", "https://i.imgur.com/rRlxBHn.png", "https://i.imgur.com/xan5sih.png", "https://i.imgur.com/hzCfWht.png", "https://i.imgur.com/V0lOVy8.png", "https://i.imgur.com/x6P8NhG.png", "https://i.imgur.com/SnKgXqk.png"]

# USERS
User.create(name: "Lauren", color: "Purple", age: 5, avatar: "https://i.imgur.com/V0lOVy8.png")
User.create(name: "Patrick", color: "Green", age: 4, avatar: "https://i.imgur.com/rRlxBHn.png")

8.times do User.create(name: Faker::Name.unique.first_name, color: Faker::Color.color_name, age: Faker::Number.between(3, 8), avatar: avatar.sample )
end

# TESTS
Test.create(name: "Basic Addition One")
Test.create(name: "Basic Addition Two")
Test.create(name: "Basic Addition Three")
Test.create(name: "Basic Addition Four")
Test.create(name: "Basic Addition Five")

Test.create(name: "Basic Subtraction One")
Test.create(name: "Basic Subtraction Two")
Test.create(name: "Basic Subtraction Three")
Test.create(name: "Basic Subtraction Four")
Test.create(name: "Basic Subtraction Five")

Test.create(name: "Picture Test One")
Test.create(name: "Picture Test Two")
Test.create(name: "Picture Test Three")
Test.create(name: "Picture Test Four")
Test.create(name: "Picture Test Five")

Test.create(name: "Hard Addition One")
Test.create(name: "Hard Addition Two")
Test.create(name: "Hard Addition Three")
Test.create(name: "Hard Addition Four")
Test.create(name: "Hard Addition Five")

Test.create(name: "Hard Subtraction One")
Test.create(name: "Hard Subtraction Two")
Test.create(name: "Hard Subtraction Three")
Test.create(name: "Hard Subtraction Four")
Test.create(name: "Hard Subtraction Five")

# QUESTIONS
additionQ1 = Question.create(test_id: 1, number: 1, question: "What does 2 + 3 equal?", correct_answer: "5", answer1: "4", answer2: "9", answer3: "1", image_url: "")
additionQ2 = Question.create(test_id: 1, number: 2, question: "What does 4 + 4 equal?", correct_answer: "8", answer1: "10", answer2: "5", answer3: "12", image_url: "")
additionQ3 = Question.create(test_id: 1, number: 3, question: "What does 1 + 7 equal?", correct_answer: "8", answer1: "3", answer2: "11", answer3: "10", image_url: "")
additionQ4 = Question.create(test_id: 1, number: 4, question: "What does 12 + 3 equal?", correct_answer: "15", answer1: "9", answer2: "17", answer3: "13", image_url: "")
additionQ5 = Question.create(test_id: 1, number: 5, question: "What does 3 + 4 equal?", correct_answer: "7", answer1: "6", answer2: "9", answer3: "15", image_url: "")

additionQ6 = Question.create(test_id: 2, number: 1, question: "What does 8 + 9 equal?", correct_answer: "17", answer1: "13", answer2: "11", answer3: "4", image_url: "")
additionQ7 = Question.create(test_id: 2, number: 2, question: "What does 2 + 11 equal?", correct_answer: "13", answer1: "5", answer2: "9", answer3: "12", image_url: "")
additionQ8 = Question.create(test_id: 2, number: 3, question: "What does 1 + 1 equal?", correct_answer: "2", answer1: "5", answer2: "0", answer3: "11", image_url: "")
additionQ9 = Question.create(test_id: 2, number: 4, question: "What does 2 + 2 equal?", correct_answer: "4", answer1: "22", answer2: "8", answer3: "14", image_url: "")
additionQ10 = Question.create(test_id: 2, number: 5, question: "What does 2 + 10 equal?", correct_answer: "12", answer1: "2", answer2: "3", answer3: "15", image_url: "")

additionQ11 = Question.create(test_id: 3, number: 1, question: "What does 4 + 3 equal?", correct_answer: "7", answer1: "4", answer2: "9", answer3: "1", image_url: "")
additionQ12 = Question.create(test_id: 3, number: 2, question: "What does 2 + 4 equal?", correct_answer: "6", answer1: "10", answer2: "5", answer3: "12", image_url: "")
additionQ13 = Question.create(test_id: 3, number: 3, question: "What does 4 + 7 equal?", correct_answer: "11", answer1: "3", answer2: "8", answer3: "9", image_url: "")
additionQ14 = Question.create(test_id: 3, number: 4, question: "What does 2 + 5 equal?", correct_answer: "7", answer1: "9", answer2: "17", answer3: "4", image_url: "")
additionQ15 = Question.create(test_id: 3, number: 5, question: "What does 4 + 3 equal?", correct_answer: "7", answer1: "6", answer2: "9", answer3: "15", image_url: "")

additionQ16 = Question.create(test_id: 4, number: 1, question: "What does 1 + 9 equal?", correct_answer: "10", answer1: "13", answer2: "11", answer3: "4", image_url: "")
additionQ17 = Question.create(test_id: 4, number: 2, question: "What does 2 + 8 equal?", correct_answer: "10", answer1: "5", answer2: "9", answer3: "12", image_url: "")
additionQ18 = Question.create(test_id: 4, number: 3, question: "What does 3 + 3 equal?", correct_answer: "6", answer1: "5", answer2: "0", answer3: "11", image_url: "")
additionQ19 = Question.create(test_id: 4, number: 4, question: "What does 4 + 4 equal?", correct_answer: "8", answer1: "22", answer2: "13", answer3: "14", image_url: "")
additionQ20 = Question.create(test_id: 4, number: 5, question: "What does 2 + 10 equal?", correct_answer: "11", answer1: "2", answer2: "3", answer3: "6", image_url: "")

additionQ21 = Question.create(test_id: 5, number: 1, question: "What does 10 + 3 equal?", correct_answer: "13", answer1: "4", answer2: "9", answer3: "17", image_url: "")
additionQ22 = Question.create(test_id: 5, number: 2, question: "What does 11 + 4 equal?", correct_answer: "15", answer1: "10", answer2: "5", answer3: "12", image_url: "")
additionQ23 = Question.create(test_id: 5, number: 3, question: "What does 1 + 7 equal?", correct_answer: "8", answer1: "3", answer2: "17", answer3: "9", image_url: "")
additionQ24 = Question.create(test_id: 5, number: 4, question: "What does 3 + 5 equal?", correct_answer: "8", answer1: "9", answer2: "17", answer3: "4", image_url: "")
additionQ25 = Question.create(test_id: 5, number: 5, question: "What does 1 + 3 equal?", correct_answer: "4", answer1: "6", answer2: "9", answer3: "5", image_url: "")

subtractionQ1 = Question.create(test_id: 6, number: 1, question: "What does 12 - 3 equal?", correct_answer: "9", answer1: "4", answer2: "15", answer3: "1", image_url: "")
subtractionQ2 = Question.create(test_id: 6, number: 2, question: "What does 4 - 4 equal?", correct_answer: "0", answer1: "2", answer2: "8", answer3: "3", image_url: "")
subtractionQ3 = Question.create(test_id: 6, number: 3, question: "What does 12 - 7 equal?", correct_answer: "5", answer1: "10", answer2: "3", answer3: "8", image_url: "")
subtractionQ4 = Question.create(test_id: 6, number: 4, question: "What does 8 - 6 equal?", correct_answer: "2", answer1: "9", answer2: "17", answer3: "6", image_url: "")
subtractionQ5 = Question.create(test_id: 6, number: 5, question: "What does 4 - 3 equal?", correct_answer: "1", answer1: "7", answer2: "12", answer3: "4", image_url: "")

subtractionQ6 = Question.create(test_id: 7, number: 1, question: "What does 18 - 6 equal?", correct_answer: "12", answer1: "9", answer2: "10", answer3: "15", image_url: "")
subtractionQ7 = Question.create(test_id: 7, number: 2, question: "What does 5 - 2 equal?", correct_answer: "3", answer1: "5", answer2: "9", answer3: "7", image_url: "")
subtractionQ8 = Question.create(test_id: 7, number: 3, question: "What does 4 - 2 equal?", correct_answer: "2", answer1: "7", answer2: "12", answer3: "4", image_url: "")
subtractionQ9 = Question.create(test_id: 7, number: 4, question: "What does 7 - 6 equal?", correct_answer: "1", answer1: "0", answer2: "3", answer3: "15", image_url: "")
subtractionQ10 = Question.create(test_id: 7, number: 5, question: "What does 2 - 2 equal?", correct_answer: "0", answer1: "5", answer2: "4", answer3: "7", image_url: "")

subtractionQ11 = Question.create(test_id: 8, number: 1, question: "What does 12 - 1 equal?", correct_answer: "11", answer1: "4", answer2: "15", answer3: "1", image_url: "")
subtractionQ12 = Question.create(test_id: 8, number: 2, question: "What does 4 - 1 equal?", correct_answer: "3", answer1: "2", answer2: "8", answer3: "5", image_url: "")
subtractionQ13 = Question.create(test_id: 8, number: 3, question: "What does 12 - 6 equal?", correct_answer: "6", answer1: "10", answer2: "3", answer3: "8", image_url: "")
subtractionQ14 = Question.create(test_id: 8, number: 4, question: "What does 8 - 6 equal?", correct_answer: "2", answer1: "9", answer2: "17", answer3: "6", image_url: "")
subtractionQ15 = Question.create(test_id: 8, number: 5, question: "What does 4 - 0 equal?", correct_answer: "4", answer1: "7", answer2: "12", answer3: "1", image_url: "")

subtractionQ16 = Question.create(test_id: 9, number: 1, question: "What does 18 - 8 equal?", correct_answer: "10", answer1: "9", answer2: "6", answer3: "15", image_url: "")
subtractionQ17 = Question.create(test_id: 9, number: 2, question: "What does 15 - 2 equal?", correct_answer: "13", answer1: "15", answer2: "9", answer3: "17", image_url: "")
subtractionQ18 = Question.create(test_id: 9, number: 3, question: "What does 14 - 12 equal?", correct_answer: "2", answer1: "7", answer2: "12", answer3: "4", image_url: "")
subtractionQ19 = Question.create(test_id: 9, number: 4, question: "What does 17 - 16 equal?", correct_answer: "1", answer1: "0", answer2: "3", answer3: "15", image_url: "")
subtractionQ20 = Question.create(test_id: 9, number: 5, question: "What does 12 - 12 equal?", correct_answer: "0", answer1: "5", answer2: "4", answer3: "7", image_url: "")

subtractionQ21 = Question.create(test_id: 10, number: 1, question: "What does 12 - 11 equal?", correct_answer: "1", answer1: "4", answer2: "4", answer3: "1", image_url: "")
subtractionQ22 = Question.create(test_id: 10, number: 2, question: "What does 8 - 1 equal?", correct_answer: "7", answer1: "2", answer2: "8", answer3: "5", image_url: "")
subtractionQ23 = Question.create(test_id: 10, number: 3, question: "What does 12 - 10 equal?", correct_answer: "2", answer1: "10", answer2: "3", answer3: "8", image_url: "")
subtractionQ24 = Question.create(test_id: 10, number: 4, question: "What does 18 - 9 equal?", correct_answer: "9", answer1: "10", answer2: "17", answer3: "6", image_url: "")
subtractionQ25 = Question.create(test_id: 10, number: 5, question: "What does 9 - 0 equal?", correct_answer: "9", answer1: "7", answer2: "12", answer3: "1", image_url: "")

Question.create(test_id: 11, number: 1, question: "How many strawberries can you see?", correct_answer: "2", answer1: "4", answer2: "5", answer3: "1", image_url: "https://media-private.canva.com/MADT6NZk8JQ/1/screen.png?response-expires=Mon%2C%2017%20Jun%202019%2018%3A16%3A37%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T160213Z&X-Amz-SignedHeaders=host&X-Amz-Expires=8063&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=212352cb9d0fcd1022eb5f801d186e92ecc905e5af2c0fb21799d936f51412a2")
Question.create(test_id: 11, number: 2, question: "How many bananas can you see?", correct_answer: "3", answer1: "4", answer2: "5", answer3: "1", image_url: "https://media-private.canva.com/MADUiVyU2S4/1/screen.png?response-expires=Mon%2C%2017%20Jun%202019%2018%3A08%3A30%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T160341Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7488&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=378a3461b163648e7b4de8d2bbf985aa5c66f85419ba231ce61bf44f9969ff72")
Question.create(test_id: 11, number: 3, question: "How many cheeries are there?", correct_answer: "6", answer1: "4", answer2: "5", answer3: "9", image_url: "https://i.imgur.com/XQ0JkOT.png")
Question.create(test_id: 11, number: 4, question: "How many teddies can you count?", correct_answer: "5", answer1: "4", answer2: "7", answer3: "12", image_url: "https://i.imgur.com/HDlkwRL.png")
Question.create(test_id: 11, number: 5, question: "How many lollies can you see?", correct_answer: "1", answer1: "4", answer2: "5", answer3: "2", image_url: "https://media-private.canva.com/MACMqQi6o50/1/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2018%3A19%3A59%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T161359Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7559&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fa952d195eae4d8ecf2ecf9896b81c899ce2e9fde166b5c9cfe3d3002536826e")

Question.create(test_id: 12, number: 1, question: "How many spots does the ladybird have?", correct_answer: "11", answer1: "9", answer2: "15", answer3: "13", image_url: "https://i.imgur.com/keQVqSC.png")
Question.create(test_id: 12, number: 2, question: "How many ice creams can you see?", correct_answer: "8", answer1: "3", answer2: "11", answer3: "9", image_url: "https://i.imgur.com/nc4KZ2p.png")
Question.create(test_id: 12, number: 3, question: "How many dogs can you see?", correct_answer: "9", answer1: "12", answer2: "8", answer3: "6", image_url: "https://media-private.canva.com/MACLO4GOLX8/1/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2018%3A59%3A38%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T162544Z&X-Amz-SignedHeaders=host&X-Amz-Expires=9233&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e0e4d7f2255699321a8913bd52a555a96ea0965c97eebf812677d40fe3510706")
Question.create(test_id: 12, number: 4, question: "How many milkshakes can you see?", correct_answer: "2", answer1: "4", answer2: "5", answer3: "8", image_url: "https://i.imgur.com/EGdzEj7.png")
Question.create(test_id: 12, number: 5, question: "How many tigers can you see?", correct_answer: "1", answer1: "4", answer2: "10", answer3: "15", image_url: "https://media-private.canva.com/MACGKngkPKw/1/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2019%3A48%3A49%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T174714Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7294&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7b9561e29e34ca7333f07c14845f8030f5dae6fa934bb071b830a11b0603ed5b")

Question.create(test_id: 13, number: 1, question: "How many cats can you see?", correct_answer: "9", answer1: "6", answer2: "13", answer3: "7", image_url: "https://media-private.canva.com/MACHYa40hww/1/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2019%3A22%3A01%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T162626Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10534&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=63fabcaf4e7dfa584adb043bfc4415f870c0d852bc884e01ffc9f362dd34e109")
Question.create(test_id: 13, number: 2, question: "How many crayons are there?", correct_answer: "10", answer1: "12", answer2: "5", answer3: "8", image_url: "https://i.imgur.com/g590rGQ.png")
Question.create(test_id: 13, number: 3, question: "How many buttons can you see?", correct_answer: "8", answer1: "11", answer2: "5", answer3: "9", image_url: "https://i.imgur.com/xcVqIwt.png")
Question.create(test_id: 13, number: 4, question: "How many cows can you see?", correct_answer: "1", answer1: "4", answer2: "2", answer3: "10", image_url: "https://media-private.canva.com/MACNqSoB3mg/1/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2019%3A07%3A43%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T164909Z&X-Amz-SignedHeaders=host&X-Amz-Expires=8313&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=99cbfd9e6560c29d901363b00936228fe347bc09a9b7309d3bcb53c884abe414")
Question.create(test_id: 13, number: 5, question: "How many pigs can you see?", correct_answer: "2", answer1: "4", answer2: "5", answer3: "13", image_url: "https://i.imgur.com/eyhyvEM.png")

Question.create(test_id: 14, number: 1, question: "How many crayons can you see?", correct_answer: "4", answer1: "2", answer2: "5", answer3: "8", image_url: "https://media-private.canva.com/MACDjq2m8cY/2/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2018%3A50%3A39%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T163026Z&X-Amz-SignedHeaders=host&X-Amz-Expires=8412&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7e98e0c073f86fc2c4674d70a63162f2c11c85814803cb9fe0664170857b11ae")
Question.create(test_id: 14, number: 2, question: "How many bumble bees can you see?", correct_answer: "9", answer1: "12", answer2: "19", answer3: "1", image_url: "blob:https://imgur.com/11faa353-dc43-409c-ac64-76134ae6dbdc")
Question.create(test_id: 14, number: 3, question: "How many flowers can you see?", correct_answer: "14", answer1: "22", answer2: "9", answer3: "17", image_url: "https://i.imgur.com/q8SCOsp.png")
Question.create(test_id: 14, number: 4, question: "How many sheep can you see?", correct_answer: "5", answer1: "4", answer2: "9", answer3: "12", image_url: "https://i.imgur.com/HRGGPgq.png")
Question.create(test_id: 14, number: 5, question: "How many suns can you see?", correct_answer: "4", answer1: "6", answer2: "9", answer3: "2", image_url: "https://i.imgur.com/Teji5kE.png")

Question.create(test_id: 15, number: 1, question: "How many ducks can you see?", correct_answer: "9", answer1: "8", answer2: "17", answer3: "12", image_url: "https://i.imgur.com/fC4RLjV.png")
Question.create(test_id: 15, number: 2, question: "How many rainbows can you see?", correct_answer: "1", answer1: "4", answer2: "8", answer3: "3", image_url: "https://media-private.canva.com/MAB8iDNHpbo/1/screen-1.png?response-expires=Mon%2C%2017%20Jun%202019%2019%3A58%3A09%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190617T172246Z&X-Amz-SignedHeaders=host&X-Amz-Expires=9322&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20190617%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bf25f5f80e9237ed1b52cd3d62bc4f86cb484a3747b3fa63d079b107553e2970")
Question.create(test_id: 15, number: 3, question: "How many sandwiches can you see?", correct_answer: "5", answer1: "4", answer2: "9", answer3: "1", image_url: "https://i.imgur.com/p6nY5Eb.png")
Question.create(test_id: 15, number: 4, question: "How many cakes can you see?", correct_answer: "8", answer1: "10", answer2: "6", answer3: "2", image_url: "https://i.imgur.com/IgTnl7g.png")
Question.create(test_id: 15, number: 5, question: "How many fish can you see?", correct_answer: "4", answer1: "5", answer2: "1", answer3: "11", image_url: "https://i.imgur.com/2oIaCId.png")

Question.create(test_id: 16, number: 1, question: "9 + 5", correct_answer: "14", answer1: "13", answer2: "11", answer3: "4", image_url: "")
Question.create(test_id: 16, number: 2, question: "2 + 12", correct_answer: "14", answer1: "5", answer2: "9", answer3: "12", image_url: "")
Question.create(test_id: 16, number: 3, question: "4 + 7", correct_answer: "11", answer1: "5", answer2: "0", answer3: "11", image_url: "")
Question.create(test_id: 16, number: 4, question: "12 + 5", correct_answer: "17", answer1: "18", answer2: "13", answer3: "14", image_url: "")
Question.create(test_id: 16, number: 5, question: "3 + 2", correct_answer: "5", answer1: "14", answer2: "10", answer3: "6", image_url: "")

Question.create(test_id: 17, number: 1, question: "8 + 10", correct_answer: "18", answer1: "13", answer2: "11", answer3: "4", image_url: "")
Question.create(test_id: 17, number: 2, question: "7 + 3", correct_answer: "10", answer1: "5", answer2: "9", answer3: "12", image_url: "")
Question.create(test_id: 17, number: 3, question: "2 + 13", correct_answer: "15", answer1: "5", answer2: "0", answer3: "11", image_url: "")
Question.create(test_id: 17, number: 4, question: "18 + 1", correct_answer: "19", answer1: "18", answer2: "13", answer3: "14", image_url: "")
Question.create(test_id: 17, number: 5, question: "3 + 8", correct_answer: "11", answer1: "14", answer2: "10", answer3: "6", image_url: "")

Question.create(test_id: 18, number: 1, question: "3 + 7", correct_answer: "10", answer1: "13", answer2: "11", answer3: "4", image_url: "")
Question.create(test_id: 18, number: 2, question: "2 + 9", correct_answer: "11", answer1: "5", answer2: "9", answer3: "12", image_url: "")
Question.create(test_id: 18, number: 3, question: "15 + 4", correct_answer: "19", answer1: "5", answer2: "0", answer3: "11", image_url: "")
Question.create(test_id: 18, number: 4, question: "13 + 7", correct_answer: "20", answer1: "18", answer2: "13", answer3: "14", image_url: "")
Question.create(test_id: 18, number: 5, question: "8 + 2", correct_answer: "10", answer1: "14", answer2: "10", answer3: "6", image_url: "")

Question.create(test_id: 19, number: 1, question: "1 + 13", correct_answer: "14", answer1: "13", answer2: "11", answer3: "4", image_url: "")
Question.create(test_id: 19, number: 2, question: "13 + 5", correct_answer: "18", answer1: "5", answer2: "9", answer3: "12", image_url: "")
Question.create(test_id: 19, number: 3, question: "2 + 12", correct_answer: "14", answer1: "5", answer2: "0", answer3: "11", image_url: "")
Question.create(test_id: 19, number: 4, question: "7 + 4", correct_answer: "11", answer1: "18", answer2: "13", answer3: "14", image_url: "")
Question.create(test_id: 19, number: 5, question: "9 + 5", correct_answer: "14", answer1: "14", answer2: "10", answer3: "6", image_url: "")

Question.create(test_id: 20, number: 1, question: "10 + 2", correct_answer: "12", answer1: "13", answer2: "11", answer3: "4", image_url: "")
Question.create(test_id: 20, number: 2, question: "11 + 5", correct_answer: "16", answer1: "5", answer2: "9", answer3: "12", image_url: "")
Question.create(test_id: 20, number: 3, question: "5 + 7", correct_answer: "12", answer1: "5", answer2: "0", answer3: "11", image_url: "")
Question.create(test_id: 20, number: 4, question: "8 + 8", correct_answer: "16", answer1: "18", answer2: "13", answer3: "14", image_url: "")
Question.create(test_id: 20, number: 5, question: "12 + 5", correct_answer: "17", answer1: "14", answer2: "10", answer3: "6", image_url: "")

Question.create(test_id: 21, number: 1, question: "10 - 7", correct_answer: "3", answer1: "9", answer2: "6", answer3: "15", image_url: "")
Question.create(test_id: 21, number: 2, question: "5 - 2", correct_answer: "3", answer1: "7", answer2: "9", answer3: "17", image_url: "")
Question.create(test_id: 21, number: 3, question: "7 - 5", correct_answer: "2", answer1: "7", answer2: "12", answer3: "4", image_url: "")
Question.create(test_id: 21, number: 4, question: "11 - 6", correct_answer: "5", answer1: "0", answer2: "3", answer3: "15", image_url: "")
Question.create(test_id: 21, number: 5, question: "9 - 8", correct_answer: "1", answer1: "10", answer2: "4", answer3: "9", image_url: "")

Question.create(test_id: 22, number: 1, question: "2 - 1", correct_answer: "1", answer1: "9", answer2: "6", answer3: "15", image_url: "")
Question.create(test_id: 22, number: 2, question: "8 - 4", correct_answer: "4", answer1: "7", answer2: "9", answer3: "17", image_url: "")
Question.create(test_id: 22, number: 3, question: "12 - 10", correct_answer: "2", answer1: "7", answer2: "12", answer3: "4", image_url: "")
Question.create(test_id: 22, number: 4, question: "7 - 4", correct_answer: "3", answer1: "0", answer2: "3", answer3: "15", image_url: "")
Question.create(test_id: 22, number: 5, question: "17 - 13", correct_answer: "4", answer1: "10", answer2: "4", answer3: "9", image_url: "")

Question.create(test_id: 23, number: 1, question: "19 - 15", correct_answer: "4", answer1: "9", answer2: "6", answer3: "15", image_url: "")
Question.create(test_id: 23, number: 2, question: "7 - 2", correct_answer: "5", answer1: "7", answer2: "9", answer3: "17", image_url: "")
Question.create(test_id: 23, number: 3, question: "3 - 1", correct_answer: "2", answer1: "7", answer2: "12", answer3: "4", image_url: "")
Question.create(test_id: 23, number: 4, question: "11 - 4", correct_answer: "7", answer1: "0", answer2: "3", answer3: "15", image_url: "")
Question.create(test_id: 23, number: 5, question: "9 - 2", correct_answer: "7", answer1: "10", answer2: "4", answer3: "9", image_url: "")

Question.create(test_id: 24, number: 1, question: "20 - 3", correct_answer: "17", answer1: "9", answer2: "6", answer3: "15", image_url: "")
Question.create(test_id: 24, number: 2, question: "15 - 12", correct_answer: "3", answer1: "7", answer2: "9", answer3: "17", image_url: "")
Question.create(test_id: 24, number: 3, question: "6 - 2", correct_answer: "4", answer1: "7", answer2: "12", answer3: "4", image_url: "")
Question.create(test_id: 24, number: 4, question: "13 - 11", correct_answer: "2", answer1: "0", answer2: "3", answer3: "15", image_url: "")
Question.create(test_id: 24, number: 5, question: "10 - 5", correct_answer: "5", answer1: "10", answer2: "4", answer3: "9", image_url: "")

Question.create(test_id: 25, number: 1, question: "9 - 4", correct_answer: "5", answer1: "9", answer2: "6", answer3: "15", image_url: "")
Question.create(test_id: 25, number: 2, question: "12 - 8", correct_answer: "4", answer1: "7", answer2: "9", answer3: "17", image_url: "")
Question.create(test_id: 25, number: 3, question: "5 - 2", correct_answer: "3", answer1: "7", answer2: "12", answer3: "4", image_url: "")
Question.create(test_id: 25, number: 4, question: "7 - 4", correct_answer: "3", answer1: "0", answer2: "3", answer3: "15", image_url: "")
Question.create(test_id: 25, number: 5, question: "18 - 13", correct_answer: "5", answer1: "10", answer2: "4", answer3: "9", image_url: "")

# USERTEST
20.times do  UserTest.create(test_id: Test.all.sample.id, user_id: User.all.sample.id, score: 0)
end
