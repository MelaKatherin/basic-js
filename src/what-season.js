const CustomError = require("../extensions/custom-error");

module.exports =  function getSeason(date) {
    let season = ['winter', 'spring', 'summer', 'autumn'];
          
    if(!date) {return 'Unable to determine the time of year!';}
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error();
      }
    
   
    
    else {
      let month = date.getMonth();
      if(month === 11 || month === 0 || month === 1) return season[0];
      else if (month > 1 && month < 5) return season[1];
      else if (month > 4 && month < 8) return season[2];
      else if (month > 7 && month < 11) return season[3];
  
    }
  
  };

 // console.log(getSeason((new Date(2020, 02, 31))));
