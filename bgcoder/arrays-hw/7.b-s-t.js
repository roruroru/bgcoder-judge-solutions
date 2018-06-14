function solve(args) {

    var array = args[0].split("\n").map(Number),
        n = +array[0],
        target = +array[array.length - 1];

    array.shift();
    array.pop();

    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex;
    var currentElement;


    while (minIndex <= maxIndex) {
        currentIndex = ((minIndex + maxIndex) / 2) | 0;

        currentElement = +array[currentIndex];

        if (target > currentElement) {
            minIndex = currentIndex + 1;
        }
        else if (target < currentElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            console.log(currentIndex);
        }
    }
    console.log(-1);
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '33']);
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '1']);
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '00']);