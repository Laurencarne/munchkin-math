class User < ApplicationRecord
    has_many :userTests
    has_many :tests, through: :userTests
end
