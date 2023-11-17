// A mock function to mimic making an async request for data
export function createWordCloud(url) {
  return new Promise(async (resolve) =>{
    const response = await fetch('htpp://localhost:8080/word',{
      method:'GET',
      body: JSON.stringify({url:url}),
      headers:{'content-type': 'application/json'}
    });
    const data = await response.json();
    resolve(data);
  }
  );
}
