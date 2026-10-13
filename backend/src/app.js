import express from "express";
// variável para acessar os métodos express
const app = express();
// ativa o leitor json
app.use(express.json())
// simula banco de dados
let usuario = [];
// rota saida de dados
app.get('/usuarios',(req, res)=>{
    // contém os parâmetros enviados na url
    // filtro busca
    const nomeBusca = req.query.nome;
    if(nomeBusca){
        const nomes =usuario.filter( (i)=>{
            return i.nome.toLowerCase().includes(nomeBusca.toLowerCase());
        } ) 
        return res.status(200).json(nomes);
    }

    


    res.status(200).json(usuario);
})

app.post('/usuarios',(req, res)=> {
    console.log(req.body);
    usuario.push(req.body)
    res.status(201).json({mensagem:"Cliente Cadastrado!"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
   console.log("Servidor Rodando! ") 
})
// http://localhost:3000