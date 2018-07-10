(function () {
    var $usernameFld, $passwordFld;
    var $emailFld;
    var $firstNameFld, $lastNameFld;
    var $roleFld;
    var $removeBtn, $editBtn, $createBtn;
    var $userRowTemplate, $tbody;
    var userService = new UserServiceClient();
    $(main);

    function main() {
    	$usernameFld = $('#usernameFld');
    	$passworldFld = $('#passworldFld');
    	$emailFld = $('#emailFld');
    	$firstNameFld = $('#firstNameFld');
    	$lastNameFld = $('#lastNameFld');
    	$roleFld = $('#roldFld');
    	$removeBtn = $('.wbdv-remove');
    	$editBtn = $('.wbdv-edit');
    	$createBtn = $('#createBtn');
    	$userRowTemplate = $('#userRowTemplate');
    	$tbody = $('tbody');
    	
    	$removeBtn.click(deleteUser);
    	$createBtn.click(createUser);
    	
    	renderUsers(findAllUsers());
    }
    function createUser() {
    	//TODO: Implement createUser
    }
    function findAllUsers() {
    	return userService.findAllUsers();
    }
    function findUserById() {
    	//TODO: Implement findUserById
    }
    function deleteUser() {
    	//TODO: Implement deleteUser
    }
    function selectUser() {
    	//TODO: Implement selectUser
    }
    function updateUser() {
    	//TODO: Implement updateUser
    }
    function renderUser(user) {
    	//TODO: Implement renderUser
    }
    function renderUsers(users) {
    	users.then(function(userlist) {
    		console.log(userlist);
        	$tbody.find("tr:gt(0)").remove();
        	for (user of userlist) {
    	    	var $newRow = $userRowTemplate.clone().appendTo($tbody);
    	    	$newRow.attr('id','');
    	    	$newRow.find('.wbdv-username').html(user.username);
    	    	$newRow.find('.wbdv-email').html(user.email);
    	    	$newRow.find('.wbdv-first-name').html(user.firstName);
    	    	$newRow.find('.wbdv-last-name').html(user.lastName);
    	    	$newRow.find('.wbdv-role').html(user.role);
    	    	$newRow.show();
        	}
    	});
    }
})();