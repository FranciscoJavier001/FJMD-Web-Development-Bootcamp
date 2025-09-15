/// <reference types="node" />

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let inputLines: string[] = [];
let currentLine = 0;

process.stdin.on('data', (inputStdin: string): void => {
  inputString += inputStdin;
});

process.stdin.on('end', (): void => {
  inputLines = inputString.split('\n');
  inputString = '';
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'countResponseTimeRegressions' function below.
 */
function countResponseTimeRegressions(responseTimes: number[]): number {
  let count = 0;
  let sumPrev = 0;

  for (let i = 0; i < responseTimes.length; i++) {
    if (i > 0 && responseTimes[i] * i > sumPrev) count++;
    sumPrev += responseTimes[i];
  }
  return count;
}

function main() {
  const n = parseInt(readLine().trim(), 10);
  const arr: number[] = [];
  for (let i = 0; i < n; i++) arr.push(parseInt(readLine().trim(), 10));
  const result = countResponseTimeRegressions(arr);
  process.stdout.write(result + '\n');
}
