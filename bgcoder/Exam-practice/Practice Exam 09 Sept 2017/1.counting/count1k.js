function solve(args) {
    let n = args[0];
    let l = n.length;
    let lastIndex = -1,
        dif = 0;
    let counter = 0;
    let arr = n.split('').map(Number);
    //console.log(arr);
    let len = arr.length;
    for(let i = len - 2; i >= 0; i -= 1) {
        if (arr[i] === 9) {
            lastIndex = i;
        }
        else {
            break;
        }
    }
    //console.log(lastIndex);
    if (len < 4) {
        let N = arr.join('');
        for(let i = 0; i < 10; i += 1) {
            N++;
            console.log(N);
        }
    }
    else {
        for(let i = len - 2; i >= lastIndex; i -= 1) {
            if(lastIndex < 0) {
                while (dif < 10) {
                    arr[len - 1]++;
                    dif++;
                    if (arr[len - 1] === 10) {
                        arr[len - 1] = 0;
                        arr[len - 2]++;
                    }
                    console.log(arr.join(''));
                    //console.log(dif);
                }

            }
            else {
                while (dif < 10) {
                    arr[len - 1]++;
                    dif++;
                    if (arr[len - 1] === 10) {
                        arr[len - 1] = 0;
                        for(let i = len - 2; i >= lastIndex; i -= 1) {
                            arr[i] = 0;
                        }
                        if (lastIndex === 0) {
                            arr.unshift(1);
                            len++;
                        }
                        else {
                            arr[lastIndex - 1]++;
                        }
                    }
                    console.log(arr.join(''));
                    //console.log(dif); 
                }
            }
        }
    }
    //console.log(lastIndex);
}

solve(["99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"]);

