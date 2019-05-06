 var katzDeliLine=[];

// takeANumber(katzDeliLine) => 1
// takeANumber(katzDeliLine) => 2 
// nowServing(katzDeliLine) => Currently Serving 1 
// takeANumber(katzDeliLine) =>

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `You are number ${katzDeliLine.length} in line.`; 
}

function nowServing(katzDeliLine){ 
  if (katzDeliLine.length===0) { 
    return "There is nobody waiting to be served!"; 
  } else { 
    var name= katzDeliLine[0]; 
    katzDeliLine.shift()
    return `Currently serving ${name}.`; 
  } 
} 

function currentLine(katzDeliLine) { 
  if (katzDeliLine.length===0) {
    return "The line is currently empty."; 
  }
  let line=[]; 
  for (var i=0; katzDeliLine.length>i; i++){
    line.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
  return "The line is currently:" + line.join(',');
}