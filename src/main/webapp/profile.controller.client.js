(function() {
	
	var $username, $firstName, $lastName;
	var $updateBtn;
	var currentUser = null;
	
	init();
	
	function init() {
		
		$username = $('#username');
		$firstName = $('#firstName');
		$lastName = $('#lastName');
		$updateBtn = $('#updateBtn');
		
		$updateBtn.click(updateUser);
		
		findUserById(12).then(renderUser);
	}
	
	function updateUser() {
		var user = {
			firstName: $firstName.val(),
			lastName: $lastName.val()
		};
		
		fetch("/api/user/" + currentUser.id, {
			method: 'put',
			body: JSON.stringify(user),
			'credentials': 'include',
			headers: {
				'content-type': 'application/json'
			}
		})
	}
	
	function renderUser(user) {
		currentUser = user;
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