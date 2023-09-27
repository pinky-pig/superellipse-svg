// 1. 这是 Cypress 中的测试上下文（context），用于组织测试用例。在这里，我们创建了一个名为 "Basic" 的测试上下文。
context('Basic', () => {
  // 2.钩子函数，在每个测试用例运行之前都会执行。
  //   它的作用是在测试开始之前使用 cy.visit('/') 命令访问网站的根URL，也就是 http://localhost:1213/。
  beforeEach(() => {
    cy.visit('/')
  })

  // 3.这是一个具体的测试用例，用于测试基本的导航和页面内容是否存在。测试用例的名称是 "basic nav"。
  it('basic nav', () => {
    // 4.这一行代码使用 cy.url() 命令获取当前页面的URL，
    // 然后使用 .should('eq', 'http://localhost:1213/') 断言来验证当前页面的URL是否等于指定的URL，即 http://localhost:1213/。
    // 这是一个基本的导航测试，确保页面正确加载。
    cy.url()
      .should('eq', 'http://localhost:1213/')

    // 5. 这一行代码使用 cy.contains('Superellipse SVG') 命令查找页面上是否存在包含文本 "Superellipse SVG" 的元素，
    // 并使用 .should('exist') 断言来验证该元素是否存在于页面上。
    // 如果存在，测试就会通过。
    cy.contains('Superellipse SVG')
      .should('exist')
  })

  // 6.总的来说，这个测试脚本的目的是打开一个网页，然后检查当前页面的URL是否正确，
  // 并验证页面上是否存在包含文本 "[Superellipse SVG]" 的元素。如果这两个断言都成功，
  // 测试就会通过，否则测试会失败，提示问题所在。
  // 这是一个简单的示例，展示了 Cypress 如何用于测试网页导航和页面内容。
})
