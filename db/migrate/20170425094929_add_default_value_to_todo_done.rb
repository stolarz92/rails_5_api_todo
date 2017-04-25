class AddDefaultValueToTodoDone < ActiveRecord::Migration[5.0]
  def change
    change_column_default :todos, :done, false
  end
end
