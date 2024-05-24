const URL1 = "http://zero.webappsecurity.com/login.html";
const URL2 = "http://zero.webappsecurity.com/index.html";
const USERNAME = "#user_login";
const PASSWORD = "#user_password";
const SIGN_IN = "Sign in";
const SEARCH_FIELD = "#searchTerm"; 

class cmpltPage {
    static visit1() {
        cy.visit(URL1);
    }

    static visit2() {
        cy.visit(URL2);
    }

    static login(username, password) {
        cy.get(USERNAME).type('username');
        cy.get(PASSWORD).type('password');
        cy.contains(SIGN_IN).click();
    }

    static search(term) {
        cy.get(SEARCH_FIELD).type(term + '{enter}'); 
    }
}

export default cmpltPage;