class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :test_id
      t.integer :number
      t.text :question
      t.text :correct_answer
      t.text :answer1
      t.text :answer2
      t.text :answer3
      t.timestamps
    end
  end
end
