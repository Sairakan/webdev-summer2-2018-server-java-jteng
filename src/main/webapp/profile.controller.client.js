(function() {
	
	var $username, $firstName, $lastName;
	
	init();
	
	function init() {
		
		$username = $('#username');
		$firstName = $('#firstName');
		$lastName = $('#lastName');
		
		findUserById(12).then(renderUser);
	}
	
	function renderUser(user) {
		$username.val(user.username);
		$firstName.val(user.firstName);
		$lastName.val(user.lastName);
	}
	
	function findUserById(userId) {
		return fetch('/api/user/' + userId, {
			'credentials': 'include'
		}).then(function(response) {
			return response.json();
		});
	}
	
})();