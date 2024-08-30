const express =  require ('express');
const app = express();

app.get ('/', function (req,res){
    res.send ("<h1>seja bem vindo ao meu site <h1> <br><br> <h2> titulo<h2>")
  //  res.send ("segunda mensagem")
})

app.get ('/aluno', function (req,res){
    res.send ("<h1>seja bem vindo na sessão de alunos! <h1> <br> <br> <h2> Juan, Miguel, Perugini, João H., João Carols, Matheus Figueiredo, Kethelyn, Diego, Beatriz, Samuel, Diogo, Henrique, Davi, Giullia Gentil, Vitória, Letícia, Gabriel Moura, Rafael Moura, Matheus Moreira, Maria Clara, Julia Bordinassi, Giovanna, Gabriel Pereira, Rebeca, André, Caroline, Pedro Henrique, Cauê, Pedro Claes<h2>")
  //  res.send ("segunda mensagem")
})

app.get ('/prof', function (req,res){
    res.send (" professores jansen e luis")
  //  res.send ("segunda mensagem")
})

app.listen (8080, function (erro))
{
    if (erro){
        console.log ('ocorreu um erro')
    }else{
            console.log('servidor iniciado com sucesso!')
    }
}