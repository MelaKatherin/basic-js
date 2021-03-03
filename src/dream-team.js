const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
    // if(members.length == undefined || members == null || members == undefined ){
    //     return false
    // }
    if (!Array.isArray(members)) return false;
    let name = [];
    members.forEach(el => {
    if (typeof el == 'string'){
    el = el.trim();
    name.push(el[0].toUpperCase())
       
     }
    })
    return name.sort().join('');
};
