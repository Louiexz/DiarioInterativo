export class LinksFuncts {
    constructor() {}
    // Método para trocar de tela
    trocaTela(local) {
        window.location.href = local + '.html';
    }
    // Método para adicionar evento de clique a um botão
    addClick(botao, local) {
        var item = document.querySelector(botao)
        if (local.indexOf('com') === -1) {
            item.href = local + ".html";
        }        
        document.querySelector(botao).addEventListener('click', () => this.trocaTela(local));
    }
    linkActive() {
        var a = document.querySelectorAll('a');
    
        a.forEach(function(event) {
            event.style.textDecoration = 'none';
            if (event.href && event.href.includes('com') !== -1) {
                if (document.location.href.includes(event.href)) {
                    event.style.color = 'green';
                }
            }
        })
    }
    navLinks() {
        this.addClick(".nav-logo", '../index');
        this.addClick("#home-page", '../index');
        this.addClick("#login-page", "../PageLogin/login");
        this.addClick("#historic-page", "../PageHistoric/historico");
    }
    homeLinks() {
        this.addClick("#new-page", "../PageNew/nova-pagina");
    }
    footerLinks() {
        this.addClick("#about", "../PageAbout/about");
        this.addClick("#contact", "mailto:fluizlucas@gmail.com");
        this.addClick("#help", "../PageHelp/help");
    }
    allLinks() {
        this.navLinks();
        this.homeLinks();
        this.footerLinks();
        this.linkActive();
    }
}