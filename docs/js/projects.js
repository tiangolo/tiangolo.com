window.addEventListener("load", async function main () {
    console.log("Loading projects...")
    response = await fetch(`https://api.github.com/users/tiangolo/repos?per_page=100`)
    data = await response.json()
    let content = data.filter((project) => {
        return !project.fork && !project.archived
    }).sort((a, b) => b.stargazers_count - a.stargazers_count).map((project) => {
        return `
                <li>
                    <small>⭐️ ${project.stargazers_count}</small> - <a href="${project.html_url}" target="_blank">
                    <strong><span>${project.name}</span></strong></a>${project.description && ": " + project.description || ""}
                </li>
        `
    }).join('\n')

    document.querySelector('.projects.tiangolo').innerHTML = `<ul> ${content} </ul>`
})
