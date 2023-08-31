import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let firstName = "";
  variables.name == null
    ? (firstName = "Violet")
    : (firstName = variables.name);

  let lastName = "";
  variables.lastname == null
    ? (lastName = "Boilett")
    : (lastName = variables.lastname);

  let personRole = "";
  variables.role == null
    ? (personRole = "Student")
    : (personRole = variables.role);

  let personCity = "";
  variables.city == null
    ? (personCity = "City")
    : (personCity = variables.city);

  let personCountry = "";
  variables.country == null
    ? (personCountry = "Country")
    : (personCountry = variables.country);

  let githubName = "";
  variables.github == null
    ? (githubName = "4geeksacademy")
    : (githubName = variables.github);

  let twitterName = "";
  variables.twitter == null
    ? (twitterName = "4geeksacademy")
    : (twitterName = variables.twitter);

  let instagramName = "";
  variables.instagram == null
    ? (instagramName = "4geeksacademy")
    : (instagramName = variables.instagram);

  let linkedinName = "";
  variables.linkedin == null
    ? (linkedinName = "4geeksacademy")
    : (linkedinName = variables.linkedin);

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${firstName} ${lastName}</h1>
          <h2>${personRole}</h2>
          <h3>${personCity}, ${personCountry}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${twitterName}"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://github.com/${githubName}"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linkedinName}"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagramName}"><i class="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
