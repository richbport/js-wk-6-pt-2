// // Function to store data in localStorage with TTL
// function setCache(key, value, ttl) {
//     const item = {
//         value: value,
//         expiry: Date.now() + ttl, // Set expiry time
//     };
//     localStorage.setItem(key, JSON.stringify(item));
// }

// // Function to retrieve data from localStorage if ttl hasn't expired
// function getCache(key) {
//     const itemStr = localStorage.getItem(key);
//     if (!itemStr) {
//         return null;
//     }

// const item = JSON.parse(itemStr);

// // // Check if the cache item is expired
// if (Date.now() > item.expiry) {
//     localStorage.removeItem(key);
//     return null;
// }
// return item.value;
// }

// Example usage:
const CACHE_KEY = 'cachedData';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// check cache before fetching new data
const cachedData = getCache(CACHE_KEY);
if (cachedData) {
  console.log("Using cached data:" cachedData);
}