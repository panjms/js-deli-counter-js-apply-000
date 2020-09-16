//1
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


//2
function nowServing(katzDeliLine) {
  //base case
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    //return current customer
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}


//3
function currentLine(katzDeliLine) {
  let arr = [];
  //array with line numbers embedded
  for (let i = 0; i < katzDeliLine.length; i++) {
    arr.push(`${i+1}. ${katzDeliLine[i]}`);
  }

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently: " + arr.join(', ');
  }
}