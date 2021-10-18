const app = require('./src/app')
const sequelize = require('./util/database')
const account = require('./models/accounts')
const service = require('./models/services')
const PORT = 8080

sequelize.sync()
.then(result => {
    console.log(result)

    app.listen(PORT, err => {
        if(err) {
            console.log(err)
        } else {
            console.log(`Listening on port ${PORT}`)
        }
    })

})
.catch(err => {
    console.log(err)
})
