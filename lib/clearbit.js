const authorization = "Bearer sk_11a996a530ab669bcc09d9285552e006";
// TODO

//1. Select the form
const form = document.querySelector('#clearbitForm');
//2. Add a listener to the form with the Submit type

const displayResult = (data) => {
  console.log(data);

  //4. Display the information on the page
  const email = document.querySelector("#clearbitEmail").value;

  const name = data.person.name.fullName;
  const bio = data.person.bio;
  const location = data.person.location;
  const photoUrl = data.person.avatar;

  const nameElement = document.querySelector("#userName");
  const emailElement = document.querySelector("#userEmail");
  const bioElement = document.querySelector("#userBio");
  const locationElement = document.querySelector("#userLocation");
  const imageElement = document.querySelector("#userImage");


  nameElement.innerText = name;
  emailElement.innerText = email;
  bioElement.innerText = bio;
  locationElement.innerText = location;
  imageElement.innerHTML = `<img src="${photoUrl}">`;
}

const getEnrichedData = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  fetch(url, {
    headers: {
      "Authorization": authorization
    }
  })
  .then(response => response.json())
  .then(displayResult);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //3. Fetch the information about this email from the form
  const email = document.querySelector("#clearbitEmail").value;
  getEnrichedData(email);
});

