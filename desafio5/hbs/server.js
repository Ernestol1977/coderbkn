const express = require('express')
const { json, urlencoded } = express;
const hbs = require('express-handlebars')
const routerProductosHbs = require('./routerProductosHbs.js')
const app = express()

app.use(json())
app.use(urlencoded({ extended: true }));

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'layoutDefault.hbs'
}))

app.set('views', './views')
app.set('view engine', 'hbs')

app.use('/hbs', routerProductosHbs)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Escuchando al puerto ${PORT}`);
})