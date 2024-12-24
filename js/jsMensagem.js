function Mensagem(nome, senha) {
    let i;
    for (i in DADOS) {
        console.log(Descriptar(DADOS[i][0])+" "+Descriptar(DADOS[i][1]));
        if (nome == DADOS[i][0] && senha == DADOS[i][1]){
            return Descriptar(DADOS[i][2],"‌");
        }
    }
    if(Descriptar(senha,"‌") == "padrao"){
        return "<h1>feliz Ano Novo</h1><p>desejo a você que nesse novo ano possa conquistar todos os seus sonhos e bons desejos do seu coração!!!</p><h3>feliz 2023</h3><p>que esse ano seja cheio de paz prosperidade e saúde em sua vida.</p>";
    }
    return 0;
}