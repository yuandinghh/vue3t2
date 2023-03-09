export const request = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, 3000)
  })
}