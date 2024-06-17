describe('Testing my ecommerce', () => {
  it('passes', () => {
    cy.visit("https://frontend-ecommerce-marzo24.vercel.app/")
    cy.contains("Home")
    })

   it('Buy products', function() {
   
    cy.visit('https://frontend-ecommerce-marzo24.vercel.app/')
   
    cy.get('body > #root > div > a:nth-child(3)').click()
 
    cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #basic_email').click()
 
    cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > #basic_email').type('sebas@gmail.com')
 
    cy.get('.ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').click()
 
    cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > #basic_password').click()
 
    cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > #basic_password').type('123')
 
    cy.get('.ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click()
 
    cy.wait(1000)

    cy.contains("Logout")
 
    cy.get('body > #root > div > a:nth-child(2)').click()

    cy.wait(1000)
 
    cy.get('#root > div > div > div:nth-child(1) > button').click()
 
    cy.get('#root > div > div > div:nth-child(2) > button').click()
 
    cy.get('body > #root > div > a:nth-child(4)').click()
 
    cy.get('body > #root > div > button:nth-child(2)').click()
 
 })

    
})