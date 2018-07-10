function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'http://localhost:8080/api/user';
    var self = this;
    function createUser(user, callback) {
    	//TODO: Implement
    }
    function findAllUsers(callback) {
    	//TODO: Implement
    }
    function findUserById(userId, callback) {
    	//TODO: Implement
    }
    function updateUser(userId, user, callback) {
    	//TODO: Implement
    }
    function deleteUser(userId, callback) {
    	//TODO: Implement
    }
}