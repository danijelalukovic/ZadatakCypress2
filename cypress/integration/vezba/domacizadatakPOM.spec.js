// DOMACI ZADATAK POM json za create gallery Danijela Lukovic

import { authLogin } from '../../page_objects/loginObject'
import { header } from '../../page_objects/headerObject'
import { createGallery } from '../../page_objects/createGalleryObject'

describe('POM login', () => {
    it('Login using POM', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(1).click()
        authLogin.login('danijeladanijela@gmail.com', '123456789')
    })
    it('Create gallery using POM', () => {
        cy.get('.nav-link').should('have.length', 4)
        cy.get('.nav-link').eq(2).click()
        createGallery.create('novi title', 'novi opis', 'https://www.akvasvet.org/wp-content/uploads/2017/03/Kako-odabrati-ribicu1.jpg')
    })
})