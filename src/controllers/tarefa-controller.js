module.exports = tarefa = (app) =>{
    app.get('/',(req, res) => {
        res.send('Está ok a tarefa')
    })
};