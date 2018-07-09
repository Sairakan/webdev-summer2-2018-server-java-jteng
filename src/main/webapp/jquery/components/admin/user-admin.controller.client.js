(function () {
    var $usernameFld, $passwordFld;
    var $emailFld;
    var $firstNameFld, $lastNameFld;
    var $roleFld;
    var $removeBtn, $editBtn, $createBtn;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
    	$usernameFld = $('#usernameFld');
    	$passworldFld = $('#passworldFld');
    	
    }
    function createUser() { … }
    function findAllUsers() { … }
    function findUserById() { … }
    function deleteUser() { … }
    function selectUser() { … }
    function updateUser() { … }
    function renderUser(user) { … }
    function renderUsers(users) { … }
})();