(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
		$usernameFld = $('#username');
		$passwordFld = $('#password');
		$verifyPasswordFld = $('#password2');
		$registerBtn = $('#registerBtn');

		$registerBtn.click(register);
	}
    function register() {
		if ($passwordFld.val() != $verifyPasswordFld.val()) {
			$('p').show();
		} else {
			var user = {
				username: $usernameFld.val(),
				password: $verifyPasswordFld.val()
			}
			userService.register(user).then(registrationSuccessful);
		}
	}
	function registrationSuccessful() {
		window.location.href = '../profile/profile.template.client.html';
	}
})();