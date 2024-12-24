function Mensagem(nome, senha) {
    let i;
    for (i in DADOS) {
        console.log(Descriptar(DADOS[i][0],"‌")+" "+Descriptar(DADOS[i][1],"‌"));
        if (nome == DADOS[i][0] && senha == DADOS[i][1]){
            return Descriptar(DADOS[i][2],"‌");
        }
    }
    if(Descriptar(senha,"‌") == "2025"){
        return Descriptar(DADOS[0][2],"‌").replace("${nome}",Descriptar(nome,"‌"));
    }
    return 0;
}