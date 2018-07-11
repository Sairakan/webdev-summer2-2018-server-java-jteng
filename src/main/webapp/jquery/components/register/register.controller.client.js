(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var userService = new UserService();
    $(main);

    function main() { … }
    function register() { … }
})();


(function() {
	var $registerBtn = $('#registerBtn');
	var $usernameFld = $('#username');
	var $passwordFld = $('#password');
	var $password2Fld = $('#password2');
	
	registerBtn.click(registerHandler);
	
	function registerHandler() {
		var usernameStr = $usernameFld.val();
		var passwordStr = $passwordFld.val();
		var password2Str = $password2Fld.val();
		
		var userObj = {
			username: usernameStr,
			password: passwordStr
		};
		
		var userObjStr = JSON.stringify(userObj);
		
		fetch('/register', {
			method: 'post',
			body: userObjStr,
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		}).then(registrationSuccessful, registrationFailed);
	}
	
	function registrationSuccessful() {
		window.location.href = 'profile.template.client.html';
	}
	
	function registrationFailed() {
		alert('oops');
	}
})();