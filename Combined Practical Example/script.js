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
       console.log("Fetching new data from the API...");
       const response = await fetch(API_URL);
       const data = await response.json();

       localStorage.setItem("cachedPost", JSON.stringify(data));
       localStorage.setItem("cachedTime", Date.now().toString());

       // displayData   // display data function

    } catch(error) {
      console.log("Error fetching data:", error);
    }
}

function displayData(data) {
  const output = document.getElementById("output");
  output.innerHTML = `<h3>${data.title}</h3>`
}