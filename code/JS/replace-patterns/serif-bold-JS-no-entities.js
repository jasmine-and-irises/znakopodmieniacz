        document.getElementById("gotowe").addEventListener("click", function (event) {
            event.preventDefault();

            var inputText = document.getElementById("tekst-po-polsku").value;

            // Konkretne znaki i ich zamienniki
            var replacements = {
                "A": "𝐀",
                "a": "𝐚",
                "Ą": "𝐀̨",
                "ą": "𝐚̨",
                "B": "𝐁",
                "b": "𝐛",
                "C": "𝐂",
                "c": "𝐜", 
                "Ć": "𝐂́",
                "ć": "𝐜́",
                "D": "𝐃",
                "d": "𝐝",
                "E": "𝐄",
                "e": "𝐞",
                "Ę": "𝐄̨",
                "ę": "𝐞̨",
                "F": "𝐅",
                "f": "𝐟",
                "G": "𝐆",
                "g": "𝐠",
                "H": "𝐇",
                "h": "𝐡",
                "I": "𝐈",
                "i": "𝐢",
                "J": "𝐉",
                "j": "𝐣",
                "K": "𝐊",
                "k": "𝐤",
                "L": "𝐋",
                "l": "𝐥",
                "Ł": "𝐋̷",
                "ł": "𝐥̷",
                "M": "𝐌",
                "m": "𝐦",
                "N": "𝐍",
                "n": "𝐧",
                "Ń": "𝐍́",
                "ń": "𝐧́",
                "O": "𝐎",
                "o": "𝐨",
                "Ó": "𝐎́",
                "ó": "𝐨́",
                "P": "𝐏",
                "p": "𝐩",
                "Q": "𝐐",
                "q": "𝐪",
                "R": "𝐑",
                "r": "𝐫",
                "S": "𝐒",
                "s": "𝐬",
                "Ś": "𝐒́",
                "ś": "𝐬́",
                "T": "𝐓",
                "t": "𝐭",
                "U": "𝐔",
                "u": "𝐮",
                "V": "𝐕",
                "v": "𝐯",
                "W": "𝐖",
                "w": "𝐰",
                "X": "𝐗",
                "x": "𝐱",
                "Y": "𝐘",
                "y": "𝐲",
                "Z": "𝐙",
                "z": "𝐳",
                "Ź": "𝐙́",
                "ź": "𝐳́",
                "Ż": "𝐙̇",
                "ż": "𝐳̇"
            };
    
            // Zamiana każdego znaku z inputu
            var outputText = inputText;
            for (var key in replacements) {
                var regex = new RegExp(key, "g"); // Globalny nowy regex dla klucza
                outputText = outputText.replace(regex, replacements[key]);
                }
    
            // Oto i wynik
            document.getElementById("wynik").textContent = outputText;
        });
