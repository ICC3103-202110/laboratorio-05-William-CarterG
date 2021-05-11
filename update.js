
function calculate_tip(bill, tip){
    return bill*tip/100
}
function update(iB,iT){
    //const {bill, percentage, tip, total} = model
    const newTip = calculate_tip(parseInt(iB), parseInt(iT))
    const newTotal = parseInt(iB) + parseInt(newTip)
    return {
        BillAmount: iB,
        TipP: iT,
        Tip: newTip,
        Total: newTotal,
        inputB : iB,
        inputT : iT,
    }
}

module.exports = {
    update
}