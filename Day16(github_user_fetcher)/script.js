async function fetchGitHubUser() {
  const username = document.getElementById("username").value;
  const profile = document.getElementById("profile");
  profile.innerHTML = "Loading...";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");

    const user = await res.json();

    profile.innerHTML = `
      <img src="${user.avatar_url}" alt="${user.login}" />
      <h2>${user.name || user.login}</h2>
      <p>${user.bio || "No bio available"}</p>
      <p>📁 Public Repos: ${user.public_repos}</p>
      <p>👥 Followers: ${user.followers} | Following: ${user.following}</p>
      <a href="${user.html_url}" target="_blank">View on GitHub</a>
    `;
  } catch (err) {
    profile.innerHTML = `<p style="color:red;">❌ ${err.message}</p>`;
  }
}
