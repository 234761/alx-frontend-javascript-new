function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation here
    // Example: Fetching data from an API
    fetch('https://api.example.com')
      .then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error('Error: API request failed'));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default getResponseFromAPI;
