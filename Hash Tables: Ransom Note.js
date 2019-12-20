let magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
let note = ['two', 'times', 'two', 'is', 'four'];

let resArr = [];

for( let i = 0; i < note.length; i++){
  for(let j = 0; j < magazine.length; j++){
    if(note[i] === magazine[j]){
      resArr.push(note[i]);
    }
  }
  magazine.splice(0,1)
}

let result = resArr.length === note.length ? 'Yes' : 'No';

  console.log(result) 
