/*SaturdayFun function declaration*/
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

/*MondayWork functionExpression*/
let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

/*wrapAdjective Function*/
function wrapAdjective(flair = "*") {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
    }
}