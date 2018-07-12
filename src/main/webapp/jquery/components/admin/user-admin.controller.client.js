(function () {
	var $usernameFld, $passwordFld;
	var $emailFld;
	var $firstNameFld, $lastNameFld;
	var $roleFld;
	var $searchBtn, $createBtn;
	var $userRowTemplate, $tbody;
	var $createPopup;
	var userService = new UserServiceClient();

	var editUsername = "<input id='editUsernameFld' />";
	var editPassword = "<input id='editPasswordFld' />";
	var editEmail = "<input id='editEmailFld' />";
	var editFirstName = "<input id='editFirstNameFld' />";
	var editLastName = "<input id='editLastNameFld' />";
	var editPhone = "<input id='editPhoneFld' />";
	var editRole = "<select id='editRoleFld'>" +
		"<option value='FACULTY'>Faculty</option>" +
		"<option value='STUDENT'>Student</option>" +
		"<option value='ADMIN'>Admin</option></select>";
	var editDateOfBirth = "<input type='date' id='editDateOfBirthFld' />";

	$(main);

	function main() {
		$usernameFld = $('#usernameFld');
		$passwordFld = $('#passwordFld');
		$emailFld = $('#emailFld');
		$firstNameFld = $('#firstNameFld');
		$lastNameFld = $('#lastNameFld');
		$roleFld = $('#roleFld');
		$createBtn = $('.wbdv-create');
		$userRowTemplate = $('#userRowTemplate');
		$tbody = $('tbody');
		$createPopup = $('#createUserPopup');

		$(document).on('click', '.wbdv-remove', deleteUser);
		$createBtn.click(createUser);
		$(document).on('click', '.wbdv-edit', editUser);
		$(document).on('click', '.wbdv-check', updateUser);

		renderUsers(findAllUsers());
	}
	function createUser() {
		var user = {
			username: $usernameFld.val(),
			password: $passwordFld.val(),
			email: $emailFld.val(),
			firstName: $firstNameFld.val(),
			lastName: $lastNameFld.val(),
			role: ($roleFld.val() === "ANY" ? "STUDENT" : $roleFld.val())
		};

		userService.createUser(user).then(
			setTimeout(function () { renderUsers(findAllUsers()); }, 200));

		$createPopup.show();
		$createPopup.fadeOut(3000);
	}
	function findAllUsers() {
		return userService.findAllUsers();
	}
	function findUserById(userId) {
		return userService.findUserById(userId);
	}
	function deleteUser() {
		var id = $(this).attr('id');
		userService.deleteUser(id).then(
			setTimeout(function () { renderUsers(findAllUsers()); }, 200));
	}
	function updateUser() {

		var userId = $(this).attr('id');
		var $currentRow = $(this).parent().parent().parent();

		var currentUsername = $currentRow.find('#editUsernameFld').val();
		var currentPassword = $currentRow.find('#editPasswordFld').val();
		var currentEmail = $currentRow.find('#editEmailFld').val();
		var currentFirstName = $currentRow.find('#editFirstNameFld').val();
		var currentLastName = $currentRow.find('#editLastNameFld').val();
		var currentPhone = $currentRow.find('#editPhoneFld').val();
		var currentRole = $currentRow.find('.wbdv-role :selected').val();
		var currentDateOfBirth = $currentRow.find('#editDateOfBirthFld').val();


		findUserById(userId).then(user => {
			user.username = currentUsername;
			user.password = currentPassword;
			user.email = currentEmail;
			user.firstName = currentFirstName;
			user.lastName = currentLastName;
			user.phone = currentPhone;
			user.role = currentRole;
			user.dateOfBirth = currentDateOfBirth;

			userService.updateUser(userId, user).then(
				setTimeout(function () { renderUsers(findAllUsers()); }, 500));
		});
	}
	function renderUser(user) {
		//TODO: Implement renderUser
	}
	function renderUsers(users) {
		users.then(function (userlist) {
			$tbody.find("tr:gt(0)").remove();
			for (user of userlist) {
				var $newRow = $userRowTemplate.clone().appendTo($tbody);
				$newRow.removeAttr('id', '');
				$newRow.find('.wbdv-username').html(user.username);
				$newRow.find('.wbdv-password').html('**********');
				$newRow.find('.wbdv-email').html(user.email);
				$newRow.find('.wbdv-first-name').html(user.firstName);
				$newRow.find('.wbdv-last-name').html(user.lastName);
				$newRow.find('.wbdv-phone').html(user.phone);
				$newRow.find('.wbdv-role').html(user.role);
				$newRow.find('.wbdv-date-of-birth').html(user.dateOfBirth);
				$newRow.find('.wbdv-edit').attr('id', user.id);
				$newRow.find('.wbdv-remove').attr('id', user.id);
				$newRow.show();
			}
		});
	}
	function editUser() {
		var userId = $(this).attr('id');
		$(this).removeClass('fa-edit').addClass('fa-check');
		$(this).removeClass('wbdv-edit').addClass('wbdv-check');

		var $currentRow = $(this).parent().parent().parent();

		var currentUsername = $currentRow.find('.wbdv-username').text();
		var $editUsernameFld = $currentRow.find('.wbdv-username').html(editUsername);
		$editUsernameFld.find('#editUsernameFld').val(currentUsername);

		findUserById(userId).then(user => {
			var currentPassword = user.password;
			var $editPasswordFld = $currentRow.find('.wbdv-password').html(editPassword);
			$editPasswordFld.find('#editPasswordFld').val(currentPassword);
		});

		var currentEmail = $currentRow.find('.wbdv-email').text();
		var $editEmailFld = $currentRow.find('.wbdv-email').html(editEmail);
		$editEmailFld.find('#editEmailFld').val(currentEmail);

		var currentFirstName = $currentRow.find('.wbdv-first-name').text();
		var $editFirstNameFld = $currentRow.find('.wbdv-first-name').html(editFirstName);
		$editFirstNameFld.find('#editFirstNameFld').val(currentFirstName);

		var currentLastName = $currentRow.find('.wbdv-last-name').text();
		var $editLastNameFld = $currentRow.find('.wbdv-last-name').html(editLastName);
		$editLastNameFld.find('#editLastNameFld').val(currentLastName);

		var currentPhone = $currentRow.find('.wbdv-phone').text();
		var $editPhoneFld = $currentRow.find('.wbdv-phone').html(editPhone);
		$editPhoneFld.find('#editPhoneFld').val(currentPhone);

		var currentRole = $currentRow.find('.wbdv-role').text();
		var $editRoleFld = $currentRow.find('.wbdv-role').html(editRole);
		$editRoleFld.find('option').each(function () {
			if (currentRole == $(this).val()) {
				$(this).attr('selected', 'selected');
			}
		});

		var currentDateOfBirth = $currentRow.find('.wbdv-date-of-birth').text();
		var $editDateOfBirthFld = $currentRow.find('.wbdv-date-of-birth').html(editDateOfBirth);
		$editDateOfBirthFld.find('#editDateOfBirthFld').val(currentDateOfBirth);
	}
})();