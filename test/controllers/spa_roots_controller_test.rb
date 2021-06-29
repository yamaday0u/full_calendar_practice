require 'test_helper'

class SpaRootsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get spa_roots_show_url
    assert_response :success
  end

end
