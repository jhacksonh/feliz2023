function Abc() {
    return [" ", "â", "á", "ã", "à", "é", "ê", "í", "õ", "ô", "ó", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "è", "ç", "ú", "û", "ù", "\,", ".", "?", "!", "(", ")", "\"", "\\","/","<", ">"];
}
/*var ABC=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];*/
function Encriptar(string) {
    let leters = string.split("");
    let cript = "";
    let i = 0;
    for (leter of leters) {
        for (abc of Abc()) {
            if (abc == leter) {
                cript += Abc().indexOf(abc);
                if (i < leters.length - 1) {
                    cript += "."
                }
                i++;
                break;
            }
        }
    }
    return cript;
}
function Descriptar(stringE) {
    let leters = stringE.split(".");
    let descript = "";
    for (i of leters) {
        descript += Abc()[i];
    }
    return descript;
}