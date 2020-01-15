function check (form) {
	var fail = false;
	var name = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	var passwordCheck = localStorage.getItem(name);
	if (name == "" || name == " " || name == null)
		fail = "Wrong Nickname or Password!";
	else if (password != passwordCheck)
		fail = "Wrong Nickname or Password!";
	if (fail)
		alert(fail);
	else {
		document.location.href='/index.html';
		alert("Добро пожаловать, " + name);
	}
}
