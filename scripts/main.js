$(document).ready(function() {
    const name = $('#name');
    const userName = $('#username');
    const avatar = $('#avatar');
    const repos = $('#repos');
    const followers = $('#followers');
    const following = $('#following');
    const link = $('#link');
    const userGitHub = `https://api.github.com/users/eduardatavars`;

    fetch(userGitHub)
    .then(function(infos) {
        return infos.json();
    })
    .then(function(json) {
        name.text(json.name);
        userName.text(json.login);
        avatar.attr('src', json.avatar_url); //método attr() do jQuery para definir o atributo src da imagem.
        followers.text(json.followers);
        following.text(json.following);
        repos.text(json.public_repos);
        link.attr('href', json.html_url); //método attr() do jQuery para definir o atributo href do link.
    })
    .catch(function(erro) {
        alert("Ocorreu um erro ao buscar os dados, tente novamente mais tarde.")
    })
})