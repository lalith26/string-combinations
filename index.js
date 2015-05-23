module.exports = {
  generate:generate
}


function generate(input){
  inputString = input.split('');
  //calculate the length of string
  var inputStringLength = inputString.length;
  //the number of possible combinations
  var noOfCombinations  = Math.pow(2, inputStringLength);
  //the result array
  var combinations = [];
  //the logic
  var tempString = "";
  for(var i = 0; i < noOfCombinations; i++){
    tempString = "";
    for(var j = 0; j < inputStringLength; j++){
      if(i & Math.pow(2, j)){
        tempString += inputString[j];
      }
    }
    if(tempString != "")
      combinations.push(tempString);
  }
  return combinations;
}
