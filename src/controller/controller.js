const contr = (app, dados) => {
app.get ('/tips', (req, res) => {
    res.json ({
        "tip": dados.tips[Math.floor(Math.random() * dados.tips.length)]
    })
})

app.post ('/create', (req, res) => {
    console.log('Acesso OK')
    const body = req.body
    dados.tips.push (body.tip)
    res.json (body)
})
}

export default contr