// Q1/Write a method that will remove any given character from a String?

let string ="Hello World"
let character ="H"

//Solution 1
const removeSpecificCharacter =  (character) => {
    let newString = string.replace(`${character}`, '');
    console.log(newString)
}

removeSpecificCharacter(character);

//Solution 2

const removeSpecificIndex = (index) => {
    let newString = string.slice(index);
    console.log(newString)
}

let index=1;
removeSpecificIndex(index)

// Solution 3
// The for loop solution

const removeSpecificCharacterUsingForLoop = (ch) => {
    let newString=[] ;let count=0;
    
    for ( let i=0 ; i < string.length ; i++ ){
        
        if( string[i] != ch ){

            newString[i] = string[i]
            count++;
        }
       
    }
    console.log(newString.join(""))
}

removeSpecificCharacterUsingForLoop(character);