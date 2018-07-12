(function() {
	
	var $username, $password, $password2;
	var $firstName, $lastName;
	var $phone, $role, $dateOfBirth;
	var $updateBtn, $logoutBtn;
	var $updatePopup;
	var currentUser = null;
	var userService = new UserServiceClient();
	
	$(main);
	
	function main() {
		$username = $('#usernameFld');
		$password = $('#passwordFld');
		$password2 = $('#password2Fld');
		$firstName = $('#firstNameFld');
		$lastName = $('#lastNameFld');
		$phone = $('#phoneFld');
		$role = $('#roleFld');
		$dateOfBirth = $('#dateFld');
		$updateBtn = $('#updateBtn');
		$logoutBtn = $('#logoutBtn');
		$updatePopup = $('#updatePopup');

		userService.checkLogin()
			.then(value => value.text())
			.then(text => {
				if (text == '') {
					alert('Please Sign In');
					window.location.href = '../login/login.template.client.html';
				} else {
					renderUser(JSON.parse(text));
				}
			});
		
		$updateBtn.click(updateUser);
		$logoutBtn.click(logout);
		
		$('form').submit(evt => evt.preventDefault());
	}
	function renderUser(user) {
		currentUser = user;
		$username.prop('readonly', false);
		$username.val(user.username);
		$username.prop('readonly', true);
		$firstName.val(user.firstName);
		$lastName.val(user.lastName);
		$phone.val(user.phone);
		$role.val(user.role);
		$dateOfBirth.val(user.dateOfBirth);
	}
	function updateUser() {
		if ($password.val() != $password2.val()) {
			$('#invalidPassword').show();
		} else {
			$('#invalidPassword').hide();
			currentUser.password = $password.val(),
			currentUser.firstName = $firstName.val(),
			currentUser.lastName = $lastName.val(),
			currentUser.phone = $phone.val(),
			currentUser.role = $role.val(),
			currentUser.dateOfBirth = $dateOfBirth.val()
			
			userService.updateProfile(currentUser);

			$updatePopup.show();
			$updatePopup.fadeOut(3000);
		}
	}
	function logout() {
		userService.logout().then(logoutSuccessful);
	}
	function logoutSuccessful() {
		window.location.href = '../login/login.template.client.html';
	}
})();