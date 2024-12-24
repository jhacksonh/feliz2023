function Encriptar(string) {
    let letras = string.split("");
    let cript = "";
    let i = 0, enc = 10;
    for (leter of letras) {
        for (caractere of CARACTERES) {
            if (caractere == leter) {
                cript += CARACTERES.indexOf(caractere);
                if (i < letras.length - 1) {
                    cript += "."
                }
                i++;
                break;
            }
        }
    }
    return cript;
}
function Descriptar(stringE, valid) {
    let letras = stringE.split(".");
    let descript = "";
    if (valid == "‌") {
        for (i of letras) {
            descript += CARACTERES[i];
        }
    }
    return descript;
}