let people = Array.apply(null, new Array(10))
                .map(function(_, index) {
                    return {
                        firstname: String.fromCharCode(65 + Math.random()*26 | 0, 65 + Math.random()*26 | 0, 65 + Math.random()*26 | 0, 65 + Math.random()*26 | 0, 65 + Math.random()*26 | 0),
                        lastname: String.fromCharCode(65 + Math.random()*26 | 0, 65 + Math.random()*26 | 0, 65 + Math.random()*26 | 0, 65 + Math.random()*26 | 0, 65 + Math.random()*26 | 0),
                        age: Math.random() * 100 | 0,
                        gender: Boolean((Math.random() * 200 | 0) % 2)
                    };
                });
// people.forEach(function(person) {
//     console.log(person);
// })
console.log(people);