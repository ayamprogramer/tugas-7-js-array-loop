var i = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

function per1() {
    for (var y = 0; y < 10; y++)
        console.log(i[y]);
}

function per2() {
    for (let y of i)
        console.log(y);
}
per1()
per2()