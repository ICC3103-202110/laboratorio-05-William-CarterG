const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {printTable} = require('console-table-printer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const bill = model.BillAmount
    const percentage = model.TipP
    const tip = model.Tip
    const total = model.Total
    return [
        {'Bill Amount': bill, 'Tip (%)': percentage, Tip: tip, Total:total},
    ]
}

function B(model){
    const input = model.inputB
    const message = 'Bill amount? '
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input,
            validate: function(value){
                if(parseInt(value)>0){
                    return true
                } else {
                    return 'Enter a number bigger than 0'
                }
            }
        }
    ])
}

function T(model){
    const input = model.inputT
    const message = 'Tip(%)?'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input,
            validate: function(value){
                if(parseInt(value)>0){
                    return true
                } else {
                    return 'Enter a number bigger than 0'
                }
            }
        }
    ])
}

function listForm(model){
    const {input} = model
    const message = 'Increase or decrease?'
    const choices = ['+', '-']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    B,
    T,
    listForm
}

