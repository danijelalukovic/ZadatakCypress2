

class CreateGallery {
    get title() {
        return cy.get('#title')
    }
    get description() {
        return cy.get('#description')
    }
    get image() {
        return cy.get('.input-group > .form-control')
    }
    get submit() {
        return cy.get('.btn')
    }
    create(title, description, image) {
        this.title.type(title)
        this.description.type(description)
        this.image.type(image)
        this.submit.eq(1).click()
    }
}

export const createGallery = new CreateGallery()