const express = require("express")

const app = express();
app.listen(3000, () => console.log("Servidor rodando"));

//Middleware
app.use(express.json());

//Body Params
app.post("/body", (req, res) => {
    const { nome, idade } = req.body
    res.send({
        paramType: "Body param",
        mensagem: `Seu nome é ${nome ?? "Desconhecido"}, e sua idade é ${idade ?? "indefinida"}`
    });
});

//Route Params
app.post("/route/:nome", (req, res) => {
    const { nome } = req.params;
    res.send({
        paramType: "Route param",
        mensagem: `Seja bem-vindo(a) ${nome ?? "Desconhecido"}`
    });
})

//Query Params
app.post("/query/", (req, res) => {
    const { nome } = req.query;
    res.send({
        paramType: "Query param",
        mensagem: `Seja bem-vindo(a) ${nome ?? "Desconhecido"}`
    });
})
