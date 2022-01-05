// Header component 의 input에 todo를 작성한다.
// App todoList state에 todo obj가 추가되고 Main에서 TodoItem으로 렌더링?
describe('todoMVC 테스트!', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('할 일 새로 추가하기.', () => {
    // 그냥 .new-todo란 className만 적어도 되는지? 된다해도 명확하게 하는 게 좋겠징?
    cy.get('.new-todo').type(`$hello!{enter}`);

    cy.get('.todo-list li').should('have.length', 2);
  });
});
