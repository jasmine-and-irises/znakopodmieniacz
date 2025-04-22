document.getElementById("gotowe").addEventListener("click", function (event) {
	event.preventDefault();

	var inputText = document.getElementById("tekst-po-polsku").value;

	var replacements = {
		"A":"&Ascr;",
		"a":"&ascr;",
		"Ą":"&Ascr;&zwj;&#808;",
		"ą":"&ascr;&zwj;&#808;",
		"B":"&#8492;",
		"b":"&bcr;",
		"C":"&Cscr;",
		"c":"&cscr;",
		"Ć":"&Cscr;&zwj;&#x301;",
		"ć":"&cscr;&zwj;&#x301;",
		"D":"&Dscr;",
		"d":"&dscr;",
		"E":"&#8496;",
		"e":"&escr;",
		"Ę":"&#8496;&zwj;&#808",
		"ę":"&escr;&zwj;&#808",
		"F":"&#8497;",
		"f":"&fscr;",
		"G":"&Gscr;",
		"g":"&gscr;",
		"H":"&#8459;",
		"h":"&hscr;",
		"I":"&Iscr;",
		"i":"&iscr;",
		"J":"&Jscr;",
		"j":"&jscr;",
		"K":"&Kscr;",
		"k":"&kscr;",
		"L":"&#8466;",
		"l":"&lscr;",
		"Ł":"&#8466;&zwj;&#x337;",
		"ł":"&lscr;&zwj;&#x337;",
		"M":"&Mscr;",
		"m":"&mscr;",
		"N":"&Nscr;",
		"n":"&nscr;",
		"Ń":"&Nscr;&zwj;&#x301;",
		"ń":"&nscr;&zwj;&#x301;",
		"O":"&Ocsr;",
		"o":"&oscr;",
		"Ó":"&Oscr;&zwj;&#x301;",
		"ó":"&oscr;&zwj;&#x301;",
		"P":"&Pscr;",
		"p":"&pscr;",
		"Q":"&Qscr;",
		"q":"&qscr;",
		"R":"&Rscr;",
		"r":"&rscr;",
		"S":"&Sscr;",
		"s":"&sscr;",
		"Ś":"&Sscr;&zwj;&#x301;",
		"ś":"&sscr;&zwj;&#x301;",
		"T":"&Tscr;",
		"t":"&tscr;",
		"U":"&Uscr;",
		"u":"&uscr;",
		"V":"&Vscr;",
		"v":"&vscr;",
		"X":"&Xscr;",
		"x":"&xscr;",
		"Y":"&Yscr;",
		"y":"&yscr;",
		"Z":"&Zscr;",
		"z":"&zscr;",
		"Ź":"&Zscr;&zwj;&#x301;",
		"ź":"&zscr;&zwj;&#x301;",
		"Ż":"&Zscr;&zwj;&#x307;",
		"ż":"&zscr;&zwj;&#x307;",
	};
    
	var outputText = inputText;
	for (var key in replacements) {
		var regex = new RegExp(key, "g");
		outputText = outputText.replace(regex, replacements[key]);
	}
    
	document.getElementById("wynik").innerHTML = outputText;
});
