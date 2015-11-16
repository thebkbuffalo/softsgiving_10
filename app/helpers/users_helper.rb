module UsersHelper

  def users_count
    @all_users = User.all
    total_users = @all_users.length
    total_guests = @all_users.map { |user| user.number_of_guests }.sum
    return total_guests + total_users
  end

end
