(function() {
	var $username, $password, $loginBtn;

	init();
	
	function init() {
		$username = $('#usernameFld');
		$password = $('#passwordFld');
		$loginBtn = $('#loginBtn');
		
		$loginBtn.click(loginHandler);
	}
	
	function loginHandler() {
		var user = {
			"username": $username.val(),
			"password": $password.val()
		}
	}
})();