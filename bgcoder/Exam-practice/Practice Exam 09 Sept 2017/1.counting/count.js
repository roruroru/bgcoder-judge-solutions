function solve(args) {
    let n = args[0];
    let l = n.length;
    let m;
    if (l > 2) {
        let startingNum = +(n[l-3] + n[l-2] + n[l-1]);
        //console.log(startingNum);
        for(let i = 0; i < 10; i += 1) {
            startingNum += 1;
            //console.log(startingNum);
            m = n.replace(/[0-9]{3}$/g, startingNum);
            console.log(m);
        }
    } else {
        for(let j = 0; j < 10; j += 1) {
            console.log(+n + 1 + j);
        }
    }
}

solve(["9999"]);
