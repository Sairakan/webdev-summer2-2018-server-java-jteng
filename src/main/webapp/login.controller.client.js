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
		var userObj = {
			"username": $username.val(),
			"password": $password.val()
		};
		
		var userObjStr = JSON.stringify(userObj);
		
		fetch('/login', {
			method: 'post',
			body: userObjStr,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(registrationSuccessful);
	}
	
	function registrationSuccessful() {
		window.location.href = 'profile.template.client.html';
	}
	
	
	
})();