const apiKey = "Bearer sk_86ee6f57f938a1770376051456b4d6e6:";
// TODO
// 1. Select elements that you need to work
const form = document.getElementById('clearbitForm');
const input = document.getElementById('clearbitEmail');
const name = document.getElementById('userName')
const email = document.getElementById('userEmail')
const bio = document.getElementById('userBio')
const location = document.getElementById('userLocation')

// 2. add the event listener to the submit event on the form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // https://person.clearbit.com/v1/people/email/
  const url = `https://person-stream.clearbit.com/v2/combined/find?email=${input.value}`
  // 3. send request to the API
  fetch(url, {
      headers: {
        Authorization: apiKey ,
        'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1'
      }
  })  // doing the request
    .then(response => response.json()) // 4. parse it to json
    .then((data) => {
      // 5. do what you gotta do!
      // 5.1 get the info from data
      // 5.2.1 erase the previous info first
      // 5.2.2 insert the infos on the right element
      console.log(data);
    })
})
