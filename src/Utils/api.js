const api = {
  loadData(url) {
    // Make a request to our api
    // return the rsponse data json
    return fetch(url).then((res) => res.json());
  }
};
export default api


// Making a HTTP req is an asynchronous operation.
// Fetch doesn't return our data directly.  It returns a response promise.
//
// A promise is a placeholder for the eventual result of an asynchronous operation.
//
// A promise is similar to the email you get when you've ordered a used book online.  You don't get your book right away; you get a promise that in X days you will get a used book.
//
// If we were to log our promise in the console, we'd see that it is pending; one of the three promise states.
//
// A promise can be pending, fulfilled, or rejected.
// If the result becomes availible, the promise is fulfilled.
// If an error happened, the promise is rejected.
//
// If the promise is no longer pending, it is settled.  It is settled if it is fulfilled or rejected.
// Once a promise has been settled, it can no longer change it's state.
