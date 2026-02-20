//First non-repeating character in a string

function NonRepeatingChar(str){
    let len=str.length;

    for(let i=0;i<len;i++){
        let count=0;
        for(let j=0;j<len;j++){
            if(str[i]===str[j]){
                count++;
            }
        }
        if(count===1){
            returnstr[i];
            break;
        }
    }
}




console.log(NonRepeatingChar("abcab"));