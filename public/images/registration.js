function valid (form) {
	var fail = false;
	var name = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	if (name == "" || name == " " || name == null)
		fail = "Empty form!";
	else if (password == "")
		fail = "Empty form!";
	if (fail)
		alert(fail);
	else {
		document.location.href = "index.html";
		localStorage.setItem(name,password);
	}

}
