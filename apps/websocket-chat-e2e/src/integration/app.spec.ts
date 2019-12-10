import { getAddMsgButton, getMessages  } from '../support/app.po';

// describe('websocket-chat', () => {
//   beforeEach(() => cy.visit('/'));

//   it('should display welcome message', () => {
//     // Custom command example, see `../support/commands.ts` file
//     cy.login('my-email@something.com', 'myPassword');

//     // Function helper example, see `../support/app.po.ts` file
//     getGreeting().contains('Welcome to websocket-chat!');
//   });
describe('websocket-chat', () => {
  beforeEach(() => cy.visit('/'));

  it('should display messages', () => {
    getMessages().should(t => expect(t.length).equal(2));
    getAddMsgButton().click();
    getMessages().should(t => expect(t.length).equal(3));
  });
});