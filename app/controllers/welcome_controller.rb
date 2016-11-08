class WelcomeController < ApplicationController

  def index
    @users = User.all.order('created_at desc')
    if params[:sort]
      if params[:sort] =='name'
        @users = @users.sort_by(&:name)
      else params[:sort] == 'date'
        @users
      end
    end
  end


end
