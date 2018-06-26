describe('XHR stubbing', function() {
  context('xhr is NOT stub', function() {
    beforeEach(function() {
      cy.server()
      cy.route('api/tags').as('fetch tags')
    })

    it('should work with jquery', function() {
      cy.visit('http://localhost:3000/jquery.html')
      cy.contains('JS Starter').should('be.visible')
      cy.get('p')
        .should('be.visible')
        .and('contain', 'tags')
    })
    it('should work with zepto', function() {
      cy.visit('http://localhost:3000/zepto.html')
      cy.contains('JS Starter').should('be.visible')
      cy.get('p')
        .should('be.visible')
        .and('contain', 'tags')
    })
  })

  context('xhr is stub', function() {
    beforeEach(function() {
      cy.server()
      cy.route('api/tags', { tags: 'xhr is stub' }).as('fetch tags')
    })

    it('should stub XHR with jquery', function() {
      cy.visit('http://localhost:3000/jquery.html')
      cy.contains('JS Starter').should('be.visible')
      cy.get('p')
        .should('be.visible')
        .and('contain', 'tags')
    })
    it('should stub XHR with zepto', function() {
      cy.visit('http://localhost:3000/zepto.html')
      cy.contains('JS Starter').should('be.visible')
      cy.get('p')
        .should('be.visible')
        .and('contain', 'tags')
    })
  })
})
