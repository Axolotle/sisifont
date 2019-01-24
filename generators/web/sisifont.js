/*

   ╭─╴╶┬╴╭─╴╶┬╴┌─╴╭─╮╭╮╷╶┬╴   ╭─╴╭─╮╭╮╷╷ ╷┌─╴┌─╮╶┬╴┌─╴┌─╮
   ╰─╮ │ ╰─╮ │ ├─╴│ ││││ │    │  │ │││││╭╯├─╴├┬╯ │ ├─╴├┬╯
   ╶─╯╶┴╴╶─╯╶┴╴╵  ╰─╯╵╰╯ ╵    ╰─╴╰─╯╵╰╯╰╯ ╰─╴╵ ╰ ╵ ╰─╴╵ ╰
   © 2019 - Nicolas Chesnais - autre.space
   GPL 1.3 - https://www.gnu.org/licenses/gpl-3.0.html

*/

init();

function init() {
    // set base max-width from screen size
    document.getElementById('max-width').value = getMaxWidthInGlyphs();

    // input text events
    var input = document.getElementById('input');
    input.oninput = convert;
    input.onclick = function () {
        if (this.textContent === 'Write something here.')
            this.textContent = '';
    };

    // options events
    var opts = document.getElementsByTagName('input');
    opts[0].oninput = opts[1].onclick = opts[2].onclick = convert;

    displaySpecimen();
}

function textToFont(text, overlap) {
    var font = [
        '                                                                                                                                                                                                                                                                                                                                                                                                                           ╭─╮            ╭─╮╶─╴ ○    ╶╮ ╶╮                 ╮ ╭╮                 \\  /  ^  ~ · · ○        \\  /  ^ · · \\  /  ^ · ·    ~  \\  /  ^  ~ · ·       \\  /  ^ · · /                                                                                                       ',
        '    ╷  ││ ┼┼╭┼╴ ○ ╭╮  │  ╭╯╰╮ ┬┴┬              /╭─╮╶╮ ╶─╮╶─╮╷  ┌─╴╭─╴╶─┐╭─╮╭─╮               ╶─╮╭─╮╭─┐┌─╮╭─╴┌─╮┌─╴┌─╴╭─╮╷ ╷╶┬╴  ╷╷ ╭╷  ╭╮╮╭╮╷╭─╮┌─╮╭─╮┌─╮╭─╴╶┬╴╷ ╷╷ ╷╷╷╷╷ ╷╷ ╷╶─╮ ┌╴\\  ╶┐  ^     \\    ╷       ╷    ╭╴   ╷   ╷  ╷ ╷  ╶┐                       ╷                    ╭╯ │ ╰╮                                                                                                                 ╭╮ ╷ ╷ ╷ ╷ ╭─╮· ·│╭│╶╮          │╭│         ╭╯  ┤  ╯    ╭┬┬       │ ││    ┌┬┐┌─┐┌─┐   ╭─┐╭─┐╭─┐╭─┐╭─┐╭─┐╭┬╴╭─╴┌─╴┌─╴┌─╴┌─╴╶┬╴╶┬╴╶┬╴╶┬╴┌─╮╭╮╷╭─╮╭─╮╭─╮╭─╮╭─╮   ╭─/╷ ╷╷ ╷╷ ╷╷ ╷╷ ╷├─╮┌─╮ \\  /  ^  ~ · · ○        \\  /  ^ · · \\  /  ^ · · ╶┤ ~  \\  /  ^  ~ · · ·     \\  /  ^ · · /    · ·',
        '    ╵    ┌┼┘╰┼╮╭─╯├┬╭    │  │    ╶┼╴   ╶─╴    / │ │ │ ╭─╯╶─┤└┼╴└─╮├─╮ ╶┤├─┤╰─┤ ·  ·  / ╶─╴ \\ ╶─╯│╭┤├─┤│╶┤│  │ │├─╴├─╴│╶╮├─┤ │   │├┴╮│  │││││││ │├─╯│ │├┬╯╰─╮ │ │ ││╭╯│││╭─╯╰─┤ ─  │  \\  │          ╶─╮├─╮╭─╴╭─┤╭─╮╶├╴╭─┐├─╮╶┐ ╶┐ ├┴╮ │ ╭╮╮╭╮╷╭─╮╭─┐┌─╮╷╭╴╭─╴╶├╴╷ ╷╷ ╷╷╷╷╮╷╭╷ ╷╶─╮╶┤  │  ├╴ ◠◡                                                                                                       ╵ ╭┼╴ ┼╴╶○╴┴┬┴ ╵ ├─╮   │╰│╰╯  //──┐╶─╴│╵│      ╶┼╴╰╴ ╶╯    ╷ ╷╰┤│ ·     ┴ ╰╯ \\\\ ├┘┤├─┤│┌┤  ╵├─┤├─┤├─┤├─┤├─┤├─┤├┼╴│  ├─╴├─╴├─╴├─╴ │  │  │  │ ┼╴│││││ ││ ││ ││ ││ │\\ /│/││ ││ ││ ││ │╰─┤│ ││╶┤╶─╮╶─╮╶─╮╶─╮╶─╮╶─╮╶┬╮╭─╴╭─╮╭─╮╭─╮╭─╮╶┐ ╶┐ ╶┐ ╶┐ ╭─┤╭╮╷╭─╮╭─╮╭─╮╭─╮╭─╮╶─╴╭─/╷ ╷╷ ╷╷ ╷╷ ╷╷ ╷├─╮╷ ╷',
        '    ╵    ┼┼ ╶┼╯ ○ ╰┴╯    ╰╮╭╯        ╯     · /  ╰─╯╶┴╴╰─╴╶─╯ ╵ ╶─╯╰─╯  ╵╰─╯╶─╯ ·  ╯  \\ ╶─╴ / ╵  ╰╰╯╵ ╵└─╯╰─╴└─╯╰─╴╵  ╰─╯╵ ╵╶┴╴╰─╯╵ ╵╰─╴╵╵╵╵╰╯╰─╯╵  ╰┬╯╵ ╰╶─╯ ╵ ╰─╯╰╯ ╰╯╯╵ ╵╶─╯╰─╴ └╴  \\╶┘    ───   ╰─╯╰─╯╰─╴╰─╯╰─╴ ╵ ╰─┤╵ ╵╶┴╴ │ ╵ ╵ ╰╴╵╵╵╵╰╯╰─╯├─╯╰─┤╵  ╶─╯ ╰╴╰─╯╰╯ ╰╯╯╯╵╰╰─┤╰─╴ ╰╮ │ ╭╯                                                                                                           │ ╰┼╴╶╯─ ╵ ─┼─ ╷ ╰─┤   ╰─╯    \\\\      ╰─╯      ╶─╴         ├─┤ ││    ╯       // └┴┘└┴┘└┴┘╭─╴╵ ╵╵ ╵╵ ╵╵ ╵╵ ╵╵ ╵╵╰╴╰┬╴╰─╴╰─╴╰─╴╰─╴╶┴╴╶┴╴╶┴╴╶┴╴└─╯╵╰╯╰─╯╰─╯╰─╯╰─╯╰─╯/ \\/─╯╰─╯╰─╯╰─╯╰─╯╶─╯├─╯╵╰╯╰─╯╰─╯╰─╯╰─╯╰─╯╰─╯╰┴╴╰┬╴╰─╴╰─╴╰─╴╰─╴╶┴╴╶┴╴╶┴╴╶┴╴╰─╯╵╰╯╰─╯╰─╯╰─╯╰─╯╰─╯ · /─╯╰─╯╰─╯╰─╯╰─╯╰─┤├─╯╰─┤',
        '                                                                                                                                                                                                                     ╶─╯      ╶╯                ╵    ╵                     ╶─╯                                                                                                                      ╵              ╵ ╰─╯                                       ╵                             ╰─╴                      ╯                                                                                               ╯                                                                ╶─╯   ╶─╯',
    ];

    var result = [];

    text.forEach(line => {
        let tempLine = Array(line === '' ? 1 : 5).fill('');
        for (let i = 0; i < line.length; i++) {
            let pos = (line.charCodeAt(i) - 32) * 3;
            for (let j = 0; j < 5; j++) {
                tempLine[j] += font[j][pos] + font[j][pos+1] + font[j][pos+2]
            }
        }
        // merge first line with previous last one if overlapping is enabled
        if (overlap && result.length > 2 && tempLine[0] !== '') {
            let [first, ...rest] = tempLine;
            let last = result[result.length-1];
            let mergedLine = '';
            for (let i = 0; i < first.length; i++) {
                if (first[i] != ' ' || last[i] === undefined) {
                    mergedLine += first[i];
                } else {
                    mergedLine += last[i];
                }
            }
            if (last.length > first.length) {
                mergedLine += last.slice(first.length);
            }
            result[result.length-1] = mergedLine;
            result.push(...rest);
        } else {
            result.push(...tempLine);
        }
    });

    return result;
}

function format(text, width, upperCase) {
    var result = [];
    text.forEach(line => {
        line = line.replace('’', '\'').replace('Œ', 'OE').replace('œ', 'oe');
        if (upperCase) line = line.toUpperCase();
        while (line.length > width) {
            let index = line.lastIndexOf(' ', width);
            if (index === -1) index = line.indexOf(' ');
            if (index === -1) break;
            result.push(line.slice(0, index));
            line = line.slice(index + 1);
        }
        result.push(line);
    });
    return result;
}

function display(text) {
    document.getElementById('output').innerHTML = text.join('<br>');
}

function getMaxWidthInGlyphs() {
    var glyphWidth = function () {
        var test = document.createElement("span");
        test.style.visibility = "hidden";
        document.getElementsByTagName("body")[0].appendChild(test);
        test.textContent = "|";
        var w = test.offsetWidth;
        test.parentNode.removeChild(test);
        return w * 3;
    };

    return Math.floor(document.getElementsByTagName('body')[0].offsetWidth / glyphWidth());
}

function convert(text) {
    if (!Array.isArray(text)) {
        text = document.getElementById('input').innerText.split(String.fromCharCode(10));
    }

    let options = document.getElementsByTagName('input');
    let opt = {
        maxWidth: options[0].valueAsNumber,
        upperCase: options[1].checked,
        overlap: options[2].checked
    };

    display(
        textToFont(
            format(text, opt.maxWidth, opt.upperCase),
            opt.overlap
        )
    );
}

function displaySpecimen() {
    convert([
        "Ô mage aztèque, l'écuyer vêtu d'un kit hawaïen et de bijoux reçut au coeur l'âcre piqûre, de l'île où arrive son frêle canoë.",
        "", "",
        "Ô MAGE AZTÈQUE, L'ÉCUYER VÊTU D'UN KIT HAWAÏEN ET DE BIJOUX REÇUT AU COEUR L'ÂCRE PIQÛRE, DE L'ÎLE OÙ ARRIVE SON FRÊLE CANOË.",
        "", "", "", "",
        " ! \" # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~                                                                    ¡ ¢ £ ¤ ¥ ¦ § ¨ © ª « ¬   ® ¯ ° ± ² ³ ´ µ ¶ · ¸ ¹ º » ¼ ½ ¾ ¿ À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ"
    ]);
}
