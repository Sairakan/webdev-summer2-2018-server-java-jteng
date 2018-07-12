function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.findUserByUsername = findUserByUsername;
	this.register = register;
	this.login = login;
	this.checkLogin = checkLogin;
	this.updateProfile = updateProfile;
	this.logout = logout;
    this.url = '/api/user';
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
	function login(user, callback) {
		return fetch('/api/login', {
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user),
			credentials: 'include'
		});
	}
	function checkLogin(callback) {
		return fetch('/api/checkLogin', {
			'credentials': 'include'
		});
	}
	function updateProfile(user, callback) {
		return fetch('/api/profile', {
			method: 'put',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user),
			credentials: 'include'
		})
	}
	function logout(callback) {
		return fetch('/api/logout', {
			method: 'post',
			credentials: 'include'
		});
	}
}