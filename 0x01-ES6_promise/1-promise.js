export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      resolve({ staus: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working corrently'));
    }
  });

  return promise;
}
