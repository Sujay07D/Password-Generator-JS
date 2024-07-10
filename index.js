// Random Password Generator

const passLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


function generatePass(passLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    let characters = "", temp = "";

    characters += includeLowerCase ? "abcdefghijklmnopqrstuvwxyz" : "";
    characters += includeUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    characters += includeNumbers ? "1234567890" : "";
    characters += includeSymbols ? "<>.()*&$@#!~-+_?" : "";

    for(let i = 0 ; i < passLength ; i++){
        let char = characters[Math.trunc(Math.random()*characters.length)];
        temp+=char;
    }

    return temp;
}

const password = generatePass(passLength, 
                            includeLowerCase, 
                            includeUpperCase, 
                            includeNumbers, 
                            includeSymbols
                            );

console.log(`Generated Password: ${password}`);