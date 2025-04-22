document.getElementById("gotowe").addEventListener("click", function (event) {
	event.preventDefault();

	var inputText = document.getElementById("tekst-po-polsku").value;
	var replacements = {
		"...":"&mldr;",
		",,":"&bdquo;",
		"''":"&#8221;",
		"<<":"&laquo;",
		">>":"&raquo;",
		"--":"&mdash;",
            };
    
            var outputText = inputText;
            for (var key in replacements) {
                var regex = new RegExp(key, "g"); // Globalny nowy regex dla klucza
                outputText = outputText.replace(regex, replacements[key]);
                }
    
            document.getElementById("wynik").innerHTML = outputText;
});
