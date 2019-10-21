function is_string(Astring){
    var result = is_string.isString();
    return result;
}
function is_Blank(string){
    if (!string) { 
                 return true; 
                 } else {
                        return false;
                   } 
}
function string_to_array(string){
    return string.split(' ');
}
function abbrev_name(string){
    var arrayName = string.split(" ");
        if (arrayName.length > 1) {
            return (arrayName[0] + " " + arrayName[1].charAt(0) + ".");
            }
    return arrayName[0];
}
function capitalize(string){
    var firstLetter = string.charAt(0);
    var UpperFirstLetter = firstLetter.toUpperCase();
    return string.replace(firstLetter,UpperFirstLetter)
}
function truncate_string(string,numberOfLetters){
    return string.substr(0,numberOfLetters);
}
function isUpperCaseAt(string,numberLetter){

}