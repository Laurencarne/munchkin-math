class AddCollumnToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :image_url, :string
  end
end
