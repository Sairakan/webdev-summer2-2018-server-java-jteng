function user(username, password, role) {
	this.username = username;
	this.password = password;
	this.email = '';
	this.firstName = '';
	this.lastName = '';
	this.phone = '';
	this.role = (typeof role != 'undefined' ? role : 'STUDENT'); // if role not specified, default to 'STUDENT'
	this.dateOfBirth = new Date();
	
	this.getUsername = getUsername;
	this.setUsername = setUsername;
	
	this.getPassword = getPassword;
	this.setPassword = setPassword;
	
	this.getEmail = getEmail;
	this.setEmail = setEmail;
	
	this.getFirstName = getFirstName;
	this.setFirstName = setFirstName;
	
	this.getLastName = getLastName;
	this.setLastName = setLastName;
	
	this.getPhone = getPhone;
	this.setPhone = setPhone;
	
	this.getRole = getRole;
	this.setRole = setRole;
	
	this.getDateOfBirth = getDateOfBirth;
	this.setDateOfBirth = setDateOfBirth;
	
	function getUsername() {return this.username;}
	function setUsername(username) {this.username = username;}
	
	function getPassword() {return this.password;}
	function setPassowrd(password) {this.password = password;}
	
	function getEmail() {return this.email;}
	function setEmail(email) {this.email = email;}
	
	function getFirstName() {return this.firstName;}
	function setFirstName(firstName) {this.firstName = firstName;}
	
	function getLastName() {return this.lastName;}
	function setLastName(lastName) {this.lastName = lastName;}
	
	function getPhone() {return this.phone;}
	function setPhone(phone) {this.phone = phone;}
	
	function getRole() {return this.role;}
	function setRole(role) {this.role = role;}
	
	function getDateOfBirth() {return this.dateOfBirth;}
	function setDateOfBirth(dateOfBirth) {this.dateOfBirth = dateOfBirth;}
	
}