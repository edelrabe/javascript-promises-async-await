function runAfterDelay4(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(delay), delay));
}

let df4 = (delay) => console.log(`Delay: ${delay}`);

runAfterDelay4(3000).then((delay) => df4(delay));
