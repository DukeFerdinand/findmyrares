class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  has_secure_password

  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX, message: "must be a valid email" }
end
