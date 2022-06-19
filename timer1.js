let input = process.argv.slice(2);


const alarm = function(input) {
  let inputNum = input.map(element => Number(element));
  let timeStamp = inputNum;
  for (const t of timeStamp) {
    if (t <= 0) {
      continue;
    }
    if (isNaN(t)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, t * 1000);
  }
};

alarm(input);



