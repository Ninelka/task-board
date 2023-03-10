describe('Процесс создания новой задачи', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Клик по кнопке создания новой задачи открывает модальное окно', () => {
    cy.get('button').contains('Создать задачу').click();
    cy.get('h5').contains('Новая задача').should('be.visible');
  });

  it('Нажатие на крестик закрывает модальное окно', () => {
    cy.get('button').contains('Создать задачу').click();
    cy.get('h5').contains('Новая задача').should('be.visible');
    cy.get('.btn-close').click();
    cy.get('.modal-title').should('not.exist');
  });

  it('Клик по кнопке "Закрыть" закрывает модальное окно', () => {
    cy.get('button').contains('Создать задачу').click();
    cy.get('h5').contains('Новая задача').should('be.visible');
    cy.get('button').contains('Закрыть').click();
    cy.get('.modal-title').should('not.exist');
  });

  it('Если ввести название и описание задачи и нажать на кнопку "Сохранить", то создастся карточка', () => {
    cy.get('button').click();
    cy.get('input[name="title"]').type('Рандомный заголовок задачи');
    cy.get('textarea[name="description"]').type('Какое-то описание');
    cy.get('button').contains('Сохранить').click();
    cy.get('h5').contains('Рандомный заголовок задачи').should('be.visible');
    cy.get('p').contains('Какое-то описание').should('be.visible');
  });
});

export {};
