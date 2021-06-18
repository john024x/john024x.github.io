export async function fetchdata() {  
  const res = await fetch("https://newsapi.org/v2/everything?q=digital+economy&apiKey=b1ede5f9baf244709c60f4036f1c81b4")
  
  if (res.ok) {
    return await res.json();
  } else {
    return await Promise.reject(res);
  }
}