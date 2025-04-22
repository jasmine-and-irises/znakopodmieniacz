document.getElementById("gotowe").addEventListener("click", function (event) {
	event.preventDefault();

	var inputText = document.getElementById("tekst-po-polsku").value;

	var replacements = {
    "A":"&Afr;",
    "a":"&afr;",
    "Ą":"&Afr;&zwj;&#808;,
    "ą":"&afr;&zwj;&#808;,
    "B":"&Bfr;",
    "b":"&bfr;",
    "C":"&Cfr;",
    "c":"&cfr;",
    "Ć":"&Cfr;&zwj;&#x301;,
    "ć":"&cfr;&zwj;&#x301;,
    "D":"&Dfr;",
    "d":"&dfr;",
    "E":"&Efr;",
    "e":"&efr;",
    "Ę":"&Efr;&zwj;&#808;",
    "ę":"&efr;&zwj;&#808;",
    "F":"&Ffr;",
    "f":"&ffr;",
    "G":"&Gfr;",
    "g":"&gfr;",
    "H":"&#8460;",
    "h":"&hfr;",
    "I":"&#8465;",
    "i":"&ifr;",
    "J":"&Jfr;",
    "j":"&jfr;",
    "K":"&Kfr;",
    "k":"&kfr;",
    "L":"&Lfr;",
    "l":"&lfr;",
    "Ł":"&Lfr;&zwj;&#x337;",
    "ł":"&lfr;&zwj;&#x337;",
    "M":"&Mfr;",
    "m":"&mfr;",
    "N":"&Nfr;",
    "n":"&nfr;",
    "Ń":"&Nfr;&zwj;&#x301;",
    "ń":"&nfr;&zwj;&#x301;",
    "O":"&Ofr;",
    "o":"&ofr;",
    "Ó":"&Ofr;&zwj;&#x301;",
    "ó":"&ofr;&zwj;&#x301;",
    "P":"&Pfr;",
    "p":"&pfr;",
    "Q":"&Qfr;",
    "q":"&qfr;",
    "R":"&Rfr;",
    "r":"&rfr;",
    "S":"&Sfr;",
    "s":"&sfr;",
    "Ś":"&Sfr;&zwj;&#x301;",
    "ś":"&sfr;&zwj;&#x301;",
    "T":"&Tfr;",
    "t":"&tfr;",
    "U":"&Ufr;",
    "u":"&ufr;",
    "V":"&Vfr;",
    "v":"&vfr;",
    "X":"&Xfr;",
    "x":"&xfr;",
    "Y":"&Yfr;",
    "y":"&yfr;",
    "Z":"&Zfr;",
    "z":"&zfr;",
    "Ź":"&Zfr;&zwj;&#x301;",
    "ź":"&zfr;&zwj;&#x301;",
    "Ż":"&Zfr;&zwj;&#x307;",
    "ż":"&zfr;&zwj;&#x307;",
	};
    
	var outputText = inputText;
	for (var key in replacements) {
		var regex = new RegExp(key, "g");
		outputText = outputText.replace(regex, replacements[key]);
	}
    
	document.getElementById("wynik").innerHTML = outputText;
});
