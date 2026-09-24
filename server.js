const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); //middleware
app.use(express.json());

let PARTIDAS = [
    {
        id: 1,
        jogo: "Arena Pixel",
        timeA: "Falcões",
        timeB: "Dragões",
        pontoA: 3,
        pontoB: 2,
        status: "finalizada"
    },
    {
        id: 2,
        jogo: "Corrida Turbo",
        timeA: "Lobos",
        timeB: "Falcões",
        pontoA: 0,
        pontoB: 0,
        status: "agendada"
    }
]

app.get("/", (req, res)=>{
    res.status(200).json({mensagem: "Campeonato gamer no ar!"})
});

app.get("/partidas", (req, res)=>{
    res.status(200).json(PARTIDAS);
});

app.get("/partidas/:id", (req, res)=>{
    const id = Number(req.params.id);
    const partida = PARTIDAS.find(p => p.id === id);

    if (!partida) return res.status(404).json({mensagem: "Partida não encontrada"});

    res.status(200).json(partida);
})

const PORTA = 3000;
app.listen(PORTA, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});