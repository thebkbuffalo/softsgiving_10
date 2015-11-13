class AddPhotoToComments < ActiveRecord::Migration
  def up
    add_attachment :comments, :photo
  end
  def down
    add_attachment :comments, :photo
  end
end
