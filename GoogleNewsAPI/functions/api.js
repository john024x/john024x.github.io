export async function fetchdata() {  
  const res = await fetch("https://gnews.io/api/v4/top-headlines?token=fbceae1008e3cf9c8c1f606bb16f74bd&lang=en")
  
  if (res.ok) {
    return await res.json();
  } else {
    return await Promise.reject(res);
  }
}
