class User < ActiveRecord::Base
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "150x150>" }, default_url: ""
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
end
