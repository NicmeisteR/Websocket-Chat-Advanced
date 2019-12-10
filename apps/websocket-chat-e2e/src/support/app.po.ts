export const getGreeting = () => cy.get('h1');
export const getMessages = () => cy.get('li.messages');
export const getAddMsgButton = () => cy.get('button#add-msg');