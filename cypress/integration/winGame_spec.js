describe('X can win a game', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('victory by row', () => {
    /* X */ cy.get('#row-0 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(1) > span').click()

    /* X */ cy.get('#row-0 > div:nth-child(2) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(2) > span').click()

    /* X */ cy.get('#row-0 > div:nth-child(3) > span').click()

    cy.findByRole('heading', { name: /x won!/i })
    cy.findByRole('heading', { name: /x: 1 \| o: 0/i })
    cy.findByRole('button', { name: /play again\?/i })
  })

  it('victory by column', () => {
    /* X */ cy.get('#row-0 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-0 > div:nth-child(2) > span').click()

    /* X */ cy.get('#row-1 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(2) > span').click()

    /* X */ cy.get('#row-2 > div:nth-child(1) > span').click()

    cy.findByRole('heading', { name: /x won!/i })
    cy.findByRole('heading', { name: /x: 1 \| o: 0/i })
    cy.findByRole('button', { name: /play again\?/i })
  })

  it('victory by diagonal', () => {
    /* X */ cy.get('#row-0 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-0 > div:nth-child(2) > span').click()

    /* X */ cy.get('#row-1 > div:nth-child(2) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(3) > span').click()

    /* X */ cy.get('#row-2 > div:nth-child(3) > span').click()

    cy.findByRole('heading', { name: /x won!/i })
    cy.findByRole('heading', { name: /x: 1 \| o: 0/i })
    cy.findByRole('button', { name: /play again\?/i })
  })
})

describe('O can win a game', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('victory by row', () => {
    /* X */ cy.get('#row-0 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(1) > span').click()

    /* X */ cy.get('#row-0 > div:nth-child(2) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(2) > span').click()

    /* X */ cy.get('#row-2 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(3) > span').click()

    cy.findByRole('heading', { name: /O won!/i })
    cy.findByRole('heading', { name: /x: 0 \| o: 1/i })
    cy.findByRole('button', { name: /play again\?/i })
  })

  it('victory by column', () => {
    /* X */ cy.get('#row-0 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-0 > div:nth-child(2) > span').click()

    /* X */ cy.get('#row-1 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(2) > span').click()

    /* X */ cy.get('#row-1 > div:nth-child(3) > span').click()
    /* O */ cy.get('#row-2 > div:nth-child(2) > span').click()

    cy.findByRole('heading', { name: /O won!/i })
    cy.findByRole('heading', { name: /x: 0 \| o: 1/i })
    cy.findByRole('button', { name: /play again\?/i })
  })

  it('victory by diagonal', () => {
    /* X */ cy.get('#row-0 > div:nth-child(2) > span').click()
    /* O */ cy.get('#row-0 > div:nth-child(1) > span').click()

    /* X */ cy.get('#row-0 > div:nth-child(3) > span').click()
    /* X */ cy.get('#row-1 > div:nth-child(2) > span').click()

    /* X */ cy.get('#row-1 > div:nth-child(3) > span').click()
    /* O */ cy.get('#row-2 > div:nth-child(3) > span').click()

    cy.findByRole('heading', { name: /O won!/i })
    cy.findByRole('heading', { name: /x: 0 \| o: 1/i })
    cy.findByRole('button', { name: /play again\?/i })
  })
})

describe('Tie', () => {
  it('Should tie', () => {
    cy.visit('/')

    /* X */ cy.get('#row-0 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-0 > div:nth-child(2) > span').click()
    /* X */ cy.get('#row-0 > div:nth-child(3) > span').click()

    /* O */ cy.get('#row-2 > div:nth-child(1) > span').click()
    /* X */ cy.get('#row-2 > div:nth-child(2) > span').click()
    /* O */ cy.get('#row-2 > div:nth-child(3) > span').click()

    /* X */ cy.get('#row-1 > div:nth-child(1) > span').click()
    /* O */ cy.get('#row-1 > div:nth-child(2) > span').click()
    /* X */ cy.get('#row-1 > div:nth-child(3) > span').click()

    cy.findByRole('heading', { name: /Empate/i })
    cy.findByRole('heading', { name: /x: 0 \| o: 0/i })
    cy.findByRole('button', { name: /play again\?/i })
  })
})
