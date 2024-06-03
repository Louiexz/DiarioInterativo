export class LinksFuncts {
    constructor() {}
    // Método para trocar de tela
    trocaTela(local) {
        window.location.href = local + '.html';
    }
    // Método para adicionar evento de clique a um botão
    addClick(botao, local) {
        document.querySelector(botao).href = local + ".html";
        document.querySelector(botao).addEventListener('click', () => this.trocaTela(local));
    }
    linkActive() {
        document.querySelectorAll("a").forEach(function(element) {
            if (window.location.href.includes(element.href)) {
                element.style.color = "green";
            }
        });
    }
    navLinks() {
        this.addClick(".nav-logo", 'index');
        this.addClick("#home-page", 'index');
        this.addClick("#login-page", "login");
        this.addClick("#historic-page", "historico");
    }
    homeLinks() {
    }
    footerLinks() {
        this.addClick("#about", "about");
        this.addClick("#contact", "mailto:fluizlucas@gmail.com");
        this.addClick("#help", "help");
    }
    allLinks() {
        this.navLinks();
        this.footerLinks();
        if(document.querySelector("#new-page")) {
            this.addClick("#new-page", "nova-pagina");
        }
        this.linkActive();
    }
}