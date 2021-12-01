const times = process.argv.slice(2);

const timer = (times) => {
  for (const time of times){
    if (time === NaN || time <= 0 || time === undefined) {
      return;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000)
    }
  }
};

timer(times);