const typeWriter = function(sentence) {
  let counter = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char); //process.stdout.write is used at the place of console.log to avoid extra "newline character"
    },counter);
    counter += 50;
  }
};

typeWriter("hello there from lighthouse labs");