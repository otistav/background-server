exports.getRandomId = n => {
  return [...Array(n)].map(() => Math.random().toString(36)[2]).join('')
}