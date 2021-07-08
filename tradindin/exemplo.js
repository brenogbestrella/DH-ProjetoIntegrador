const main = (params) => {
    let i = 0
    let randomArray = []
    let palindroms = 0


    for (i; i <=10000; i++) {
        randomArray.push(Math.random().toString(36).substr(3, 5));
    }

    function reverseString(str) {
        var splitString = str.split(""); 
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join(""); 
        return joinArray;
    }

        randomArray.forEach(word => {
            let reverse = reverseString(word)
            if(reverse == word) {
                palindroms++
            }
        })
}

main();