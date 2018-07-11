(function() {
	
	var $username, $password, $password2;
	var $firstName, $lastName;
	var $phone, $role, $dateOfBirth;
	var $updateBtn, $logoutBtn;
	var currentUser = null;
	var userService = new UserServiceClient();
	
	$(main);
	
	function main() {
		$username = $('#usernameFLd');
		$password = $('#passwordFld');
		$password2 = $('#password2Fld');
		$firstName = $('#firstNameFld');
		$lastName = $('#lastNameFld');
		$phone = $('#phoneFld');
		$role = $('#roleFld');
		$dateOfBirth = $('#dateFld');
		$updateBtn = $('#updateBtn');
		$logoutBtn = $('#logoutBtn');

		userService.checkLogin()
			.then(value => value.json())
			.then(renderUser);
		
		$updateBtn.click(updateUser);

		$username.attr('readonly', true);

		//findUserById(12).then(renderUser);
		
		$('form').submit(evt => evt.preventDefault());
	}
	function updateUser() {
		if ($password.val() != $password2.val()) {
			$('#invalidPassword').show();
		} else {
			$('#invalidPassword').hide();
			var user = {
				username: $username.val(),
				password: $password.val(),
				firstName: $firstName.val(),
				lastName: $lastName.val(),
				phone: $phone.val(),
				role: $role.val(),
				dateOfBirth: $dateOfBirth.val()
			};
	
			console.log($dateOfBirth.val());
			
			// fetch("/api/user/" + currentUser.id, {
			// 	method: 'put',
			// 	body: JSON.stringify(user),
			// 	'credentials': 'include',
			// 	headers: {
			// 		'content-type': 'application/json'
			// 	}
			// })
		}
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
	
	function findUserById(userId) {
		return fetch('/api/user/' + userId, {
			'credentials': 'include'
		}).then(function(response) {
			return response.json();
		});
	}
})();