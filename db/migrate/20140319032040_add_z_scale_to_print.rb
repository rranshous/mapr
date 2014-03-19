class AddZScaleToPrint < ActiveRecord::Migration
  def change
    add_column :prints, :z_scale, :string
  end
end
