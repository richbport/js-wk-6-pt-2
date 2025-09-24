const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData() {
    try {

       const cachedData = localStorage.getItem("cachedPost");    
       const cachedTime = localStorage.getItem("cachedTime");
       const cacheExpiry = 5 * 60 * 1000; // 5 minutes

       if (cachedData && cachedTime && Date.now() - cachedTime < cacheExpiry) {
        console.log("Using cached data");
        // displayData    //  display data function
        return
       }

    } catch {}
}