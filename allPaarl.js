function allPaarl(regNumbers){
    var regNumbersList = regNumbers.split(',');
    var regNumbersForPaarl = [];
    
    for(let i=0; i<regNumbersList.length; i++){
      var regNoremovedSpaces = regNumbersList[i].trim();
      if(regNoremovedSpaces.startsWith('CJ')){
        regNumbersForPaarl.push(regNoremovedSpaces);
      }
    }
    return regNumbersForPaarl;
  }