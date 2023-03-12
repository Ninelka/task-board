describe('Изменение задачи', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('button').click();
    cy.get('input[name="title"]').type('Рандомный заголовок задачи');
    cy.get('textarea[name="description"]').type('Какое-то описание');
    cy.get('button').contains('Сохранить').click();
  });
  it('Нажатие на иконку карандаша вызывает модальное окно для редактирования задачи', () => {
    cy.get('button').children().get('.bi-pencil-square').click();
    cy.get('h5').contains('Редактирование задачи').should('be.visible');
  });

  it('Если изменить значения полей и нажать на кнопку сохранения, то данные в карточке задачи изменятся', () => {
    cy.get('button').children().get('.bi-pencil-square').click();
    cy.get('input[name="title"]').clear().type('Измененный заголовок задачи');
    cy.get('textarea[name="description"]').clear().type('Измененное описание');
    cy.get('button').contains('Сохранить').click();
    cy.get('h5').contains('Сохранить изменения?').should('be.visible');
    cy.get('button').contains('Ok').click();
    cy.get('h5').contains('Измененный заголовок задачи').should('be.visible');
    cy.get('p').contains('Измененное описание').should('be.visible');
  });
});

export {};
