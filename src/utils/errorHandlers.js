export function handleFetchErrors(response) {
  if (response.statusText !== 'OK') {
    throw response;
  }
  return response;
}
