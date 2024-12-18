let name = document.querySelector(".name");
let pass = document.querySelector(".pass");
let btn_cfmr = document.querySelector(".btn_cfmr");
let atc_content = document.querySelector(".atc_content");
let form_secion = document.querySelector(".section_form");
let content_secion = document.querySelector(".section_content");
btn_cfmr.addEventListener('click', () => {
    let n = name.value.toLowerCase();
    let p = pass.value.toLowerCase();
    if (n !== "" && p !== "") {
        let nEncript = Encriptar(n);
        let pEncript = Encriptar(p);
        let mensagem = Mensagem(nEncript, pEncript);
        if (mensagem != 0) {
            form_secion.style.display = "none";
            content_secion.style.display = "block";
            atc_content.innerHTML = `${mensagem}`;
        } else {
            alert("dados não conferem");
        }
    } else {
        alert('Preencha todos o campos');
    }
});