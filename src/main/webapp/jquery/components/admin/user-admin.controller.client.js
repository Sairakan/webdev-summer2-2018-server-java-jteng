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
    	
    	return fetch('/api/user', {
    		method: 'get',
    		headers: {
    			'Content-Type': 'application/json'
    		}
    	}).then(function(users) {
    		return users;
    	});
    	
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
    	users = JSON.parse(users);
    	console.log(users);
    	$tbody.find("tr:gt(0)").remove();
    	for (user of users) {
	    	var $newRow = $userRowTemplate.clone().appendTo($tbody);
	    	$newRow.id("");
	    	$newRow.find('.wbdv-username').val()
	    	$newRow.show();
    	}
    }
})();