require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_users_create_url
    assert_response :success
  end

  test "should get user_params" do
    get api_users_user_params_url
    assert_response :success
  end

end
