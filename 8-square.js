const arg = process.argv[2];
const size = parseInt(arg);

if (!size || size <= 0) {
  console.log('Missing size');
} else {
  let i = 0;
  const line = 'X'.repeat(size);
  while (i < size) {
    console.log(line);
    i++;
  }
}