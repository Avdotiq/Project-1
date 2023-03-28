function duplicateCount(text) {
    const charters = text.toLowerCase().split("");
    const arr = [];

    for (i=0; i < charters.length; i++) {
        let copy = charters.filter(el => el == charters[i]);
        if (copy.length > 1) {
          if(i === 0 || !arr.includes(charters[i])) {
            arr.push(charters[i]);
          }
        }
    }

    return arr.length;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
