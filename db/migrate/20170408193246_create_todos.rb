class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.text :description
      t.string :created_by
      t.boolean :done

      t.timestamps
    end
  end
end
