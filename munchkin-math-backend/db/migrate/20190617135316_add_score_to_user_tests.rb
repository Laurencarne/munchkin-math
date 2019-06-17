class AddScoreToUserTests < ActiveRecord::Migration[5.2]
  def change
    add_column :user_tests, :score, :integer
  end
end
