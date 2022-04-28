
let message = prompt ("Enter Phrase ", " ");
console.log(message);




/* volwesAndConsonants = (str) =>{
    const vowels = "aeiou";
    let consonants = " ";
    

    for (let i = 0 ; i <str.length; i++){
        if (vowels.includes(str[i])){
            console.log(str[i]);
        }
        else{
            consonants += str[i] + "\n" ;
        }
    }
    console.log(consonants.trim());
    
}

volwesAndConsonants(message);  */

volvesConsonants = (str01) => {
    const vowels = "aeiou";
    let vowel = [];
    let consonants = [];

    for (let i=0; i<str01.length; i++){
        if (vowels.includes(str01[i])){
            vowel.push(str01[i]);
        }
        else{
            consonants.push(str01[i]);
        }
        
    }
    console.log(vowel);
    console.log(consonants);
    let val01 = vowel.toString();
    let val02 = consonants.toString();
    
    document.getElementById("container1").textContent = val01;
    document.getElementById("container2").textContent = val02;
}

volvesConsonants(message.toLowerCase());





