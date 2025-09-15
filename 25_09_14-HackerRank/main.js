'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var inputLines = [];
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */
function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    var count = 0;
    var sumPrev = 0;
    for (var i = 0; i = responseTimes.length; i++) {
        if (i > 0) {
            if (responseTimes[i] * i > sumPrev)
                count++;
        }
        sumPrev = sumPrev + responseTimes[i];
    }
    return count;
}
function main() {
    var responseTimesCount = parseInt(readLine().trim(), 10);
    var responseTimes = [];
    for (var i = 0; i < responseTimesCount; i++) {
        var responseTimesItem = parseInt(readLine().trim(), 10);
        responseTimes.push(responseTimesItem);
    }
    var result = countResponseTimeRegressions(responseTimes);
    process.stdout.write(result + '\n');
}
