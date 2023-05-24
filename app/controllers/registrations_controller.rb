class RegistrationsController < ApplicationController
  # before_action require_not_logged_in!

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: "Successfully created account"
    else
      render :new, status: 422
    end
  end

  private
  def user_params
    puts params.require(:registration).permit(:email, :password, :password_confirmation)
    params.require(:registration).permit(:email, :password, :password_confirmation)
  end
end

