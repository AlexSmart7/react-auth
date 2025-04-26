/* eslint-disable no-undef */
describe('Mis primeros test', () => {
  it('Verificar que cargue la pagina Home leyendo el H1', () => {
    
    // 01.Setup el estado de la aplicacion
    cy.visit('/')

    // 02.Ejecutar la accion / acciones

    cy.get('h1').contains('Home')  // 03. Hacer una asercion 
  })

  it('Verificar que cargue la pagina Login como Customer leyendo el H1', () => {

    // 01. Setup el estado de la aplicacion

    // Intercept se utiliza cuando se llama a una API para esperar respuesta
    cy.intercept('POST','http://localhost:3000/login').as('loginApi')

    cy.visit('/login')

    // 02.Ejecutar la accion / acciones
    cy.get('#floatingInput').type('p.parker@marvel.com')
    cy.get('#floatingPassword').type('multiverso')
    cy.get('button[type=submit]').click()

    cy.wait('@loginApi')

    cy.get('h1').contains('Dashboard')  // 03. Hacer una asercion 
  })

  it('Verificar que al hacer logout como ADMIN me lleve a Home, leyendo el H1', () => {

    // 01. Setup el estado de la aplicacion

    // Intercept se utiliza cuando se llama a una API para esperar respuesta
    cy.intercept('POST','http://localhost:3000/login').as('loginApi')

    cy.visit('/login')

    // 02.Ejecutar la accion / acciones
    cy.get('#floatingInput').type('superman@dc.com')
    cy.get('#floatingPassword').type('superman')
    cy.get('button[type=submit]').click()

    cy.wait('@loginApi')

    cy.get('h1').contains('Dashboard')  // 03. Hacer una asercion
    
    cy.get('nav ul li').eq(-2).click()

    cy.get('nav > ul li:last').click()
    
    cy.get('h1').should('have.text','Home')

  })
})