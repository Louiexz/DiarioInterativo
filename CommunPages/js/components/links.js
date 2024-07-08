export class LinksFuncts {
    constructor() {}
    // Método para adicionar evento de clique a um botão
    addClick(botao, local) {
        var item = document.querySelector(botao)
        if (local.indexOf('com') !== -1) { // Case 1: 'local' is a full URL
            item.href = local;
        } else {
            // Case 2: 'index' found in current URL
            item.href = "../" + local + '.html';
        }
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
        this.addClick(".nav-logo", 'index');
        this.addClick("#home-page", 'index');
        this.addClick("#login-page", "PageLogin/login");
        this.addClick("#historic-page", "PageHistoric/historico");
        this.addClick("#new-page", "PageNew/nova-pagina");
    }
    footerLinks() {
        this.addClick("#about", "PageAbout/about");
        this.addClick("#contact", "mailto:fluizlucas@gmail.com");
        this.addClick("#help", "PageHelp/help");
    }
    allLinks() {
        this.navLinks();
        if (window.location.href.includes('login')) {
            links.addClick("#cadastro", "PageRegister/registro")
            links.addClick("#entrar", "index")
        };
        this.footerLinks();
        this.linkActive();
    }
}