class DashboardController < ApplicationController
  before_action :require_user_logged_in!

  def overview
  end
end

