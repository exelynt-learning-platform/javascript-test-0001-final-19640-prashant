// This program prints a hollow diamond-like star pattern using nested loops

let n = 5; // number of rows for the top half

// Upper part of the pattern
for (let i = 1; i <= n; i++) {
    let row = "";

    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars and inner spaces
    if (i === 1) {
        row += "*";
    } else {
        row += "*";
        for (let j = 1; j <= (2 * i - 3); j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}

// Lower part of the pattern
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Print stars and inner spaces
    if (i === 1) {
        row += "*";
    } else {
        row += "*";
        for (let j = 1; j <= (2 * i - 3); j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}