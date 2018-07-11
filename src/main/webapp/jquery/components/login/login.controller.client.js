(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
		$usernameFld = $('#usernameFld');
		$passwordFld = $('#passwordFld');
		$loginBtn = $('#loginBtn')

		$loginBtn.click(login);
		$('form').submit(evt => evt.preventDefault());
	}
    function login() {
		var user = {
			username: $usernameFld.val(),
			password: $passwordFld.val()
		}

		userService.login(user)
			.then(value => value.text())
			.then(text => {
				if (text == '') {
					$('#invalidLogin').show();
				} else {
					loginSuccessful();
				}
			});
	}
	function loginSuccessful() {
		window.location.href = '../profile/profile.template.client.html';
	}
})();