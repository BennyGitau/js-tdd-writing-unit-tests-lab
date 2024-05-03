// Your code here
export function isPalindrome(word){
    if(word === "") {
        return false
    }
    if(typeof word !== 'string'){
        throw new Error ('not a string')
    }

    if(!word.match(/^[A-Za-z]+$/)){
        throw new Error ('Enter letters only')
    }

    const reversedWord = word.toLowerCase().split('').reverse().join('');
    console.log(reversedWord)
    return reversedWord === word


}
isPalindrome('rAcECar')