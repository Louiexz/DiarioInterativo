export class LinksFuncts {
    constructor() {}
    // Método para trocar de tela
    // Método para adicionar evento de clique a um botão
    addClick(botao, local) {
        var item = document.querySelector(botao)
        if (local.indexOf('com') !== -1) {
            item.href = local;
        } else { 
            item.href = local + ".html";
        }  
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
        this.footerLinks();
    }
}