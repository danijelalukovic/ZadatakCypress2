// DOMACI ZADATAK Locators json za create gallery i all galleries Danijela Lukovic

/// <reference types="Cypress" />

const Locators = require('../../fixtures/Locators.json');
const faker = require('faker');

let userData = {
    
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.exampleEmail(),
    password: faker.internet.password(),
    title: faker.name.title(),
    description: faker.commerce.productDescription(),
    image: faker.image.avatar()
}
before(() => {
    cy.visit('/')
    cy.url().should("contains", 'https://gallery-app')
})

describe('Create gallery using LOCATORS', () => {
    it('Register and logout', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData.name)
        cy.get(Locators.Register.LastName).type(userData.lastname)
        cy.get(Locators.Register.Email1).type(userData.email)
        cy.get(Locators.Register.Password).type(userData.password)
        cy.get(Locators.Register.ConfirmedPassword).type(userData.password)
        cy.get(Locators.Register.Checkbox).click()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Header.Logout).should('be.visible').click()
    })
    it('Login', () => {
        cy.get(Locators.Header.Login).should('be.visible').click()
        cy.get(Locators.Login.Email).type(userData.email)
        cy.get(Locators.Login.Password).type(userData.password)
        cy.get(Locators.Login.Submit).click()
    })
    it('Create gallery', () => {
        cy.get(Locators.Create.CreateGallery).click()
        cy.get(Locators.Create.Title).type(userData.title)
        cy.get(Locators.Create.Descriptions).type(userData.description)
        cy.get(Locators.Create.Images).type(userData.image)
        cy.get(Locators.Create.Submit1).click(1)
        cy.get(Locators.HomePage.MyGalleries).should('be.visible').click()
    })
    it('All galeries page', () => {
        cy.get(Locators.HomePage.AllGalleries).should('be.visible').click()
    })
})