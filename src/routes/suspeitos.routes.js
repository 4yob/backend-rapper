import { Router } from "express"

const suspeitosRoutes = Router()

let suspeitos = [
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Beyoncé",
        idade: 43,
        ativSuspeita: true,
        descricao: [
            "Negra",
            "Cabelo loiro longo",
            "Olhos Castanhos",
            "1,68 m"
        ]
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Jay-Z",
        idade: 54,
        ativSuspeita: true,
        descricao: [
            "Negro",
            "Cabelo preto trançado",
            "Olhos Castanhos",
            "1,88 m"
        ]
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Sean Combs",
        idade: 54,
        ativSuspeita: true,
        descricao: [
            "Negro",
            "Cabelo preto curto",
            "Olhos Castanhos",
            "1,78 m"
        ]
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Rihanna",
        idade: 36,
        ativSuspeita: false,
        descricao: [
            "Negra",
            "Cabelo preto longo",
            "Olhos Castanhos",
            "1,73 m"
        ]
    },
]

// Rota para buscar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeitos)
})

// Rota para cadastrar um novo suspeito
// Rota para buscar um suspeito específico por ID
// Rota para editar algum atributo de um suspeito
// Rota para deletar um suspeito

export default suspeitosRoutes