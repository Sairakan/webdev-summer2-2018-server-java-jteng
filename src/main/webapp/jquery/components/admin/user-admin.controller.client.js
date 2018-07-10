(function () {
    var $usernameFld, $passwordFld;
    var $emailFld;
    var $firstNameFld, $lastNameFld;
    var $roleFld;
    var $createBtn, $removeBtn, $editBtn, $updateBtn;
    var $userRowTemplate, $tbody;
    var $createPopup;
    var userService = new UserServiceClient();
    
    var editUsername = "<input id='editUsernameFld' />";
    var editPassword = "<input id='editPasswordFld' />";
    var editEmail = "<input id='editEmailFld' />";
    var editFirstName = "<input id='editFirstNameFld' />";
    var editLastName = "<input id='editLastNameFld' />";
    var editRole = "<select id='editRoleFld'>" +
    		"<option value='FACULTY'>Faculty</option>" +
    		"<option value='STUDENT'>Student</option>" +
    		"<option value='ADMIN'>Admin</option></select>"
    
    $(main);

    function main() {
    	$usernameFld = $('#usernameFld');
    	$passwordFld = $('#passwordFld');
    	$emailFld = $('#emailFld');
    	$firstNameFld = $('#firstNameFld');
    	$lastNameFld = $('#lastNameFld');
    	$roleFld = $('#roleFld');
    	$createBtn = $('.wbdv-create');
    	$removeBtn = $('.wbdv-remove');
    	$editBtn = $('.wbdv-edit');
    	$updateBtn = $('.wbdv-update');
    	$userRowTemplate = $('#userRowTemplate');
    	$tbody = $('tbody');
    	$createPopup = $('#createUserPopup');
    	
    	$(document).on('click', '.wbdv-remove', deleteUser);
    	$createBtn.click(createUser);
    	$(document).on('click', '.wbdv-edit', editUser);
    	$(document).on('click', '.wbdv-check', updateUser);
    	$updateBtn.click(updateUser);
    	
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
    	
    	userService.createUser(user);
    	
    	$createPopup.show();
    	$createPopup.fadeOut(3000);
    }
    function findAllUsers() {
    	return userService.findAllUsers();
    }
    function findUserById() {
    	//TODO: Implement findUserById
    }
    function deleteUser() {
    	var id = $(this).attr('id');
    	userService.deleteUser(id);
    	
    	renderUsers(findAllUsers());
    }
    function selectUser() {
    	//TODO: Implement selectUser
    }
    function updateUser() {
    	$(this).removeClass('fa-check').addClass('fa-edit');
    	$(this).removeClass('wbdv-check').addClass('wbdv-edit');
    }
    function renderUser(user) {
    	//TODO: Implement renderUser
    }
    function renderUsers(users) {
    	users.then(function(userlist) {
        	$tbody.find("tr:gt(0)").remove();
        	for (user of userlist) {
    	    	var $newRow = $userRowTemplate.clone().appendTo($tbody);
    	    	$newRow.removeAttr('id','');
    	    	$newRow.find('.wbdv-username').html(user.username);
    	    	$newRow.find('.wbdv-password').html('**********');
    	    	$newRow.find('.wbdv-email').html(user.email);
    	    	$newRow.find('.wbdv-first-name').html(user.firstName);
    	    	$newRow.find('.wbdv-last-name').html(user.lastName);
    	    	$newRow.find('.wbdv-role').html(user.role);
    	    	$newRow.find('.wbdv-edit').attr('id',user.id);
    	    	$newRow.find('.wbdv-remove').attr('id',user.id);
    	    	$newRow.show();
        	}
    	});
    }
    function editUser() {
    	$(this).removeClass('fa-edit').addClass('fa-check');
    	$(this).removeClass('wbdv-edit').addClass('wbdv-check');
    	
    	$currentRow = $(this).parent().parent().parent();
    	
    	var currentUsername = $currentRow.find('.wbdv-username').text();
    	$editUsernameFld = $currentRow.find('.wbdv-username').html(editUsername);
    	$editUsernameFld.find('#editUsernameFld').val(currentUsername);
    	
    	var currentPassword = $currentRow.find('.wbdv-password').text();
    	$editPasswordFld = $currentRow.find('.wbdv-password').html(editPassword);
    	$editPasswordFld.find('#editPasswordFld').val(currentPassword);
    	
    	var currentEmail = $currentRow.find('.wbdv-email').text();
    	$editEmailFld = $currentRow.find('.wbdv-email').html(editEmail);
    	$editEmailFld.find('#editEmailFld').val(currentEmail);

    	var currentFirstName = $currentRow.find('.wbdv-first-name').text();
    	$editFirstNameFld = $currentRow.find('.wbdv-first-name').html(editFirstName);
    	$editFirstNameFld.find('#editFirstNameFld').val(currentFirstName);

    	var currentLastName = $currentRow.find('.wbdv-last-name').text();
    	$editLastNameFld = $currentRow.find('.wbdv-last-name').html(editLastName);
    	$editLastNameFld.find('#editLastNameFld').val(currentLastName);

    	var currentRole = $currentRow.find('.wbdv-role').text();
    	$editRoleFld = $currentRow.find('.wbdv-role').html(editRole);
    	for (option of $editRoldFld.find('option')) {
    		if (currentRole == option.val()) option.attr('selected','selected');
    	}
    }
})();