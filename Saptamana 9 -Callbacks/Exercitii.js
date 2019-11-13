function expandedForm(num) {
    let result = "";
    let myArray = Array.from(num.toString()).map(Number);
    for (let i = 0; i < myArray.length; i++) {
        result += myArray[i];
        for (let j=0; j<myArray.length-i;j++){
            result+="0";
        }
        result +=" + ";
    }
}