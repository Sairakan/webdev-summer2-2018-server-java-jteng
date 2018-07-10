function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'http://localhost:8080/api/user';
    var self = this;
    function createUser(user, callback) {
    	var u = {
    			username: 'qwe',
    			password: 'wer',
    			firstName: 'qwe123',
    			lastName: 'qwe234'
    	};
    	console.log(user);
    	var uStr = JSON.stringify(u);
    	fetch('/qqqq', {
    		method: 'POST',
    		headers: {
    			'content-type': 'applicaton/json'
    		},
    		body: u
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
    		self.url + '/' + userId);
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
}