class Test < ApplicationRecord
    has_many :questions
    has_many :userTests
    has_many :users, through: :userTests
end
