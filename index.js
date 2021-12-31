const APIURL = "https://api.github.com/users/";
let section = document.querySelector(".main");
let form = document.querySelector(".form");
let search = document.querySelector(".control")
getData("venomiele");
let repoList = document.querySelector(".repo-list");

// Get the data for the users

async function getData(username) {
  const resp = await fetch(APIURL + username);
  const data = await resp.json();
  
  createUser(data);
}

//get repository data

async function getRepo(url) {
  const respData = await fetch(APIURL + username + "/repos");
  const dataResp = await respData.json();
  
  getRepoLink(username);
}
// function getRepoLink(repos) {
//   repos.forEach(repo => {
//     let liEl = repoList.createElement("li");
//     liEL.classList.add("repo");
//     liEl.innerText = repo.
//   })
// }

// dynamically create user card

function createUser(user) {
  let cardHTML =`
  <div class="card">
  <div class="avatar-container">
  <img class="avatar" src="${user.avatar_url}" alt="${user.name}">
  </div>
  <div class="user-info">
  <h2 class="username">${user.name}</h2>
  <p class="bio">${bioCheck()}</p>
  <ul class="list">
  <li>${user.followers} <span>Followers</span> </li>
    <li>${user.following} <span>Following</span> </li>
      <li>${user.public_repos} <span>Repos</span> </li>
  </ul>
  <ul class="repo-list">
  </ul>
  </div>
  </div>`
  section.innerHTML = cardHTML;
  
  function bioCheck() {
    if(user.bio == null) {
      return "The user has no bio to show!";
    } else {
      return user.bio;
    }
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = search.value;
  
  if(username) {
    getData(username)
    search.value = "";
  }
})