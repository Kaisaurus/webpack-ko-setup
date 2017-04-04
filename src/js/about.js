import '../styles/about.scss';
import nav from './nav';

const contentHtml = `
  ${nav()}
  <h2>About</h2>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.querySelector('#main').innerHTML = contentHtml;
});
