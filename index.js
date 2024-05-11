// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(array) {
  for (const value of array) {
    console.log(value);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
  }
}

// Task 02: Awaiting a Call
async function awaitCall() {
  try {
    const data = await fetchDataFromAPI(); // Simulated API call
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data from API:", error);
  }
}

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
  try {
    const data = await fetchDataFromAPI(); // Simulated API call
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data from API:", error);
  }
}

// Task 04: Chaining Async/Await
async function chainedAsyncFunctions() {
  await delay(1000); // Delay 1 second
  console.log("First function completed");

  await delay(1000); // Delay 1 second
  console.log("Second function completed");

  await delay(1000); // Delay 1 second
  console.log("Third function completed");
}

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
  const [result1, result2] = await Promise.all([fetchDataFromAPI(url1), fetchDataFromAPI(url2)]);
  console.log("Results:", result1, result2);
}

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
  const responses = await Promise.all(urls.map(url => fetchDataFromAPI(url)));
  console.log("Responses:", responses);
}

// Helper functions
async function fetchDataFromAPI(url) {
  // Simulated API call with setTimeout
  return new Promise(resolve => setTimeout(() => resolve("Data from " + url), 1000));
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
