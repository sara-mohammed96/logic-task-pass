// Q3/write a function that count how many the given character repeated in a given string?

const countRepeatedCharacter = (ch,string) => {
   let count=0;
    
    for ( let i=0 ; i < string.length ; i++ ){
        
        if( string[i] === ch ){
            
            count++;
        }
       
    }
    console.log(count)
}

let string ="Hello World"
let character ="l"
countRepeatedCharacter(character,string);