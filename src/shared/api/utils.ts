// функция для обработки ошибок

export function handleRequestError(error: Error | unknown) {
  if (error instanceof Error) {
    throw new Error(error.message);
  } else {
    throw new Error('Unknown error');
  }
}