// Code your solutions in this file

function writeCards(names, eventNames){
  let newarray = [];
  for(let i=0; i < names.length; i++){
       newarray.push(`Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`) 

  }
  return newarray
}


function countdown(number){
  
  for (let i = number; i>= 0; i--){
    console.log(i)
  }
}