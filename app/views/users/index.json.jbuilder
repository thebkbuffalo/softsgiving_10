json.array!(@users) do |user|
  json.extract! user, :id, :dish, :number_of_guests, :note
  json.url user_url(user, format: :json)
end
