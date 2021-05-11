const {B, T} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        const iB = await B(model)
        const iT = await T(model)
        //console.log(iB, iT)
        const updatedModel = update(iB.input ,iT.input)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}