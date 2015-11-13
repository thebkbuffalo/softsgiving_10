class User < ActiveRecord::Base
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "http://cdn.dota2.com/steamcommunity/public/images/avatars/https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/77/77bee8ee407898fe94d5cf93ff0bfbb3fdf82563_full.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
end
