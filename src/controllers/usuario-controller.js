 module.exports = usuario = (app) =>{
    app.get('/',(req, res) => {
        res.send('Está ok o usuário')
    })
};