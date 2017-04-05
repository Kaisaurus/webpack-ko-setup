import nav from 'js/nav';
import 'styles/main';
import ko from 'knockout';

class ViewModel {
  constructor(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
    this.fullName = ko.pureComputed(() => `${this.firstName()} ${this.lastName()}`);
  }
}

const contentHtml = `
  ${nav()}
  <h2>Home</h2>
  <p>First name: <input data-bind="value: firstName" /></p>
  <p>Last name: <input data-bind="value: lastName" /></p>
  <h2>Hello, <span data-bind="text: fullName">&nbsp;</span>!</h2>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.querySelector('#main').innerHTML = contentHtml;
  ko.applyBindings(new ViewModel('Planet', 'Earth'));
});
