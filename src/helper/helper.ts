export const handleError = (
  error: Error | unknown,
  message: string = 'Error'
) => {
  console.error(`${message}: ${error}`);
};
