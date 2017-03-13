'use strict'
module.exports = {
  
dataTypes: function(mydata) {
  if(typeof mydata == "string"){
    return mydata.length;
  } else if(typeof mydata == "number"){
    if(mydata > 100){
      return "more than 100";
    } else if(mydata < 100) {
      return "less than 100";
    } else {
      return "equal to 100";
    } 

    } else if(typeof mydata == "boolean") {
      return mydata;
  } else if(typeof mydata == "object"){
      if(mydata == null || undefined){
      return "no value";
      } else if(mydata instanceof Array && mydata.length >= 3){
      return mydata[2]
      } else {
      return undefined;
      }
    } else if(typeof mydata == "function"){
      return mydata(true);
  } else if(typeof mydata == "undefined"){
    return "no value";
  } else {
    return "invalid";
  }
}
}


