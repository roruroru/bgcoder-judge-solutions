
let people = Array.apply(null, new Array(10))
    .map(function(_, index){
        return {
            firstName: String.fromCharCode(65 + index % 2) + 'f#' + index,
            lastName: String.fromCharCode(67 + index % 2) + 'l#' + index,
            age: 14 + index,
            isFemale: Boolean(index % 2)};
        }
    );
    people.forEach(function (person) {console.log(person);});
