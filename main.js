const socialMediaLinks = {
  github: "nothingrotf",
  youtube: "enderdesing",
  facebook: "gabriel.aguiar123276",
  instagram: "gabriel_aguiar47",
  twitter: "Sienaocapotado"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
  const social = li.getAttribute('class')
  
  li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()