const screen = {
    userProfile:  document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                        <div class="data">
                            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                            <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                            <ul>
                                <li>Seguidores : ${user.followers}</li>
                                <li>Seguindo : ${user.following}</li>
                            </ul>
                        </div>`
        
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a><h4>Forks: ${repo.forks}</h4><h4>Estrelas: ${repo.stargazers_count
        }</h4><h4>Watchers: ${repo.watchers_count} </h4><h4>Languages: ${repo.language}</h4></li>`)
        
        if(repositoriesItens != ''){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                                </div>`
        }

        let eventItens = '';

        user.events.forEach(event => {
            try {
                eventItens += `<li><a target="_blank">${event.payload.commits[0].message}</a> <h3>${event.repo.name}</h3></li>`;
            } catch (error) {
                eventItens += `<li><a target="_blank">Não possui nenhuma mensagem</a> <h3>${event.repo.name}</h3></li>`;
            }
        });

if (eventItens !== '') {
  const eventosHtml = `<div class="Eventos section">
                        <h2>Eventos</h2>
                        <ul>${eventItens}</ul>
                      </div>`;
  this.userProfile.innerHTML += eventosHtml;
}

    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export {screen}