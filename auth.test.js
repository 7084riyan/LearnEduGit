describe('Basic Auth', function (){
    it('succesfully login by appending username and password in url', function (){
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.')
        })
    })
    it('succesfully login using headers',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            headers:{
                Authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode:false
        })
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.')
    })