import { Router } from "express"

const suspeitosRoutes = Router()

let suspeitos = [
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Beyoncé",
        idade: 43,
        ativSuspeita: "sim",
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
        ativSuspeita: "sim",
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
        ativSuspeita: "sim",
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
        ativSuspeita: "não",
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
suspeitosRoutes.post("/", (req, res) => {
    const {
        nome,
        idade,
        ativSuspeita,
        descricao
    } = req.body

    
    //Validação do nome obrigatório
    if (!nome) {
        return res.status(400).send({
            message: "O campo nome é obrigatório!"
        })
    }

    //Validação da idade dos suspeitos como números inteiros
    if (!Number.isInteger(idade)) {
        return res.status(400).send({
            message: "O campo idade precisa ser preenchido por um número inteiro!"
        })
    }

    //Validação de envolvimento em atividade suspeita
    if (ativSuspeita != "sim" && ativSuspeita != "não") {
        return res.status(400).send({
            message: "O campo ativSuspeita deve ser preenchido com 'sim' ou 'não'!"
        })
    }

    const novoSuspeito = {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome,
        idade,
        ativSuspeita,
        descricao
    }

    suspeitos.push(novoSuspeito)
    return res.status(201).send({
        message: "Suspeito cadastrado!",
        novoSuspeito,
    })
})

// Rota para buscar um suspeito específico por ID
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    //console.log(id)

    const suspeito = suspeitos.find((suspect) =>
        suspect.id === Number(id)
    )

    //console.log(suspeito)

    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" })
    }

    return res.status(200).send(suspeito)
})

// Rota para atualizar um suspeito
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    const suspeito = suspeitos.find((suspect) => suspect.id === Number(id)
    )

    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" })
    }

    const { nome, idade, ativSuspeita, descricao } = req.body
    //console.log(titulo)

    suspeito.nome = nome
    suspeito.idade = idade
    suspeito.ativSuspeita = ativSuspeita
    suspeito.descricao = descricao

    return res.status(200).send({
        message: "Suspeito atualizado!",
        suspeito,
    })
})

// Rota para deletar um suspeito

export default suspeitosRoutes