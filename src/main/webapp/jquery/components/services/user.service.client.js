function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.findUserByUsername = findUserByUsername;
	this.register = register;
    this.url = 'http://localhost:8080/api/user';
    var self = this;
    function createUser(user, callback) {
    	return fetch(self.url, {
    		method: 'POST',
    		headers: {
    			'content-type': 'application/json'
    		},
    		body: JSON.stringify(user)
    	});
    }
    function findAllUsers(callback) {
    	return $.ajax({
	       url: self.url,
	       success: callback
	   });
    }
    function findUserById(userId, callback) {
    	return fetch(
    		self.url + '/' + userId).then(value => {return value.json();});
    }
    function updateUser(userId, user, callback) {
    	return fetch(self.url + '/' + userId, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
    	});
    }
    function deleteUser(userId, callback) {
    	return fetch(
	        self.url + '/' + userId,
	        { method: 'DELETE' }
	    );

	}
	function findUserByUsername(username, callback) {
		return fetch('/api/register/'+username, {
			method: 'get',
			headers: {
				'content-type': 'application/json'
			},
		});
	}
	function register(user, callback) {
		return fetch('/api/register', {
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user),
			credentials: 'include'
		});
	}
}