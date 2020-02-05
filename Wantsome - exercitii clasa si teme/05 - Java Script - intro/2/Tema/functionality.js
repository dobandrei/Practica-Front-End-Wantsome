function is_string(Astring) {
    var randomString = 'random';  
    if (typeof Astring == typeof randomString) {  
        return true; 
        } else {
               return false;
          } 
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
    return string.replace(firstLetter,UpperFirstLetter);
}
function truncate_string(string,numberOfLetters){
    return string.substr(0,numberOfLetters);
}
function isUpperCaseAt(string,numberLetter){
    if ( string.charAt(numberLetter) == string.charAt(numberLetter).toUpperCase()){
        return true;
    }
    return false;
}
function insert(string1,string2,position){
    return string1.slice(0,position) + string2 + " " + string1.slice(position);
}
function remove_first_occurrence(string1,string2){
    var start = string1.indexOf(string2);
    return string1.slice(0,start) + string1.slice(start + string2.length + 1);  
  }
function compare_strings(string1,string2){
    return string1.toUpperCase() === string2.toUpperCase();
}
function Uncapitalize (string){
    var firstLetter = string.charAt(0);
    var lowerFirstLetter = firstLetter.toLowerCase();
    return string.replace(firstLetter,lowerFirstLetter);
}