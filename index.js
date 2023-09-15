console.log("halo dunia");

//no.1
function numberOne() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            if (i === j) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}
console.log(" ");
console.log("soal no.1");
numberOne();

//no.2
function numberTwo(){
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            if (i + j === 9) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}
console.log(" ");
console.log("Soal no. 2");
numberTwo();

//no.3
function numberThree() {
    for (let i = 1; i <= 8; i++) {
        for (let j = 0; j <= 8; j++) {
            if (i === j || i+j === 8) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}
console.log(" ");
console.log("Soal no. 3");
numberThree();

//no.4
function numberFour(){
    for (let i = 1; i <= 8; i++) {
        for (let j = 0; j <= 8; j++) {
            if (i === j || i+j === 8 || i === 4 || j === 4) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}
console.log(" ");
console.log("Soal no. 4");
numberFour();

//no.5
function numberFive(){
    for(let i = 1; i < 9; i++) { 
        for(let j = 1; j < 9; j++) { 
            if(i === 1 || i === 9 - 1) {
                process.stdout.write("*");
            } else {
                if(j === 1 || j === 9 - 1 || i === j || i+j === 8 || i === 4 || j === 4) {
                    process.stdout.write("*");
                } else {
                    process.stdout.write(" ");
                }
            }
        }
        process.stdout.write("\n");
    }
    console.log();
}
console.log(" ");
console.log("Soal no. 5");
numberFive();

//no.6
function numberSix(){
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
    process.stdout.write("\n");
    }
    console.log();
}
console.log(" ");
console.log("Soal no.6");
numberSix();

//no.7
function numberSeven(){
    for (let i = 1; i <= 9; i++) {
        for (let j = 0; j < 9 - i; j++) {
            process.stdout.write(" ");

        }
        for (let k = 0; k < i; k++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    console.log();
}
console.log(" ");
console.log("Soal no.7");
numberSeven();

//no.8 
function numberEight(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < (4 - i) * 2 - 1; k++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    for (let i = 2; i <= 4; i++) {
        for (let j = 4; j > i; j--) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    console.log();
}
console.log(" ");
console.log("Soal no.8");
numberEight();

//no.9
function numberNine(){
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    for (let i = 1; i <= 4 - 1; i++) {
        for (let j = 0; j < 4 - i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }


    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < 4 - i; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < i; k++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    for (let i = 1; i <= 4 - 1; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < 4 - i; k++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    console.log();
}
console.log(" ");
console.log("Soal no.9");
numberNine();

//no.10
function numberTen(){
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
    process.stdout.write("\n");
    }
    for (let i = 1; i <= 4 - 1; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < 4 - i; k++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    console.log();
}
console.log(" ");
console.log("Soal no.10");
numberTen();