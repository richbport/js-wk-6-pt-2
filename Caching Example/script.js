// // Function to store data in localStorage with TTL (Time-T0-Live)
// function setCache(key, value, ttl) {
//   const item = {
//     value: value,
//     expiry: Date.now() + ttl, // Set expiry time
//   };
//   localStorage.setItem(key, JSON.stringify(item));
// }

function setCache(key, value, ttl) {
    const item = {
        value: value,
        expiry: Date.now() + ttl,
    }
}
