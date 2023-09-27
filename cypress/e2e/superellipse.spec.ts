describe('Superellipse', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('测试触发改变随机背景', () => {
    cy.get('random-bg')
      .shadow()
      .find('#whatIsMyRandomBG')
      .find('div')
      .first()
      .should('have.css', 'background')
      .then((initialBackgroundColor) => {
        cy.get('#superellipse')
          .click()

        // 再次获取背景颜色并断言是否发生了变化
        cy.get('random-bg')
          .shadow()
          .find('#whatIsMyRandomBG')
          .find('div')
          .first()
          .should('have.css', 'background')
          .and('not.eq', initialBackgroundColor)
      })
  })
})
