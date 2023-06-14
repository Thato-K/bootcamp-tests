function allFromTown(regNumbers, regNoStart){
    var regNumbersList = regNumbers.split(',');
    var regNumbersFromTown = [];
    
    for(let i=0; i<regNumbersList.length; i++){
      var regNoRemovedSpaces = regNumbersList[i].trim();
      if(regNoRemovedSpaces.startsWith(regNoStart)){
         regNumbersFromTown.push(regNoRemovedSpaces);
         }
    }
    return regNumbersFromTown;
  }