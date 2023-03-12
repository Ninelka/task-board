describe('Удаление задачи', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Нажатие на иконку корзины вызывает модальное окно для подтверждения, если нажать Ок, то задача удалится', () => {
    cy.get('button').click();
    cy.get('input[name="title"]').type('Рандомный заголовок задачи');
    cy.get('textarea[name="description"]').type('Какое-то описание');
    cy.get('button').contains('Сохранить').click();
    cy.get('button').children().get('.bi-trash').click();
    cy.get('h5').contains('Удалить данную задачу?').should('be.visible');
    cy.get('button').contains('Ok').click();
    cy.get('[data-name="task-item"]').should('not.exist');
  });
});

export {};
