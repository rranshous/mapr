class CreatePrints < ActiveRecord::Migration
  def change
    create_table :prints do |t|
      t.string :left
      t.string :right
      t.string :top
      t.string :bottom

      t.timestamps
    end
  end
end
