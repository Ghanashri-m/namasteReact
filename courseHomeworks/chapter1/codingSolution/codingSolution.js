const heading1 = document.createElement('h1');
heading1.innerHTML = 'Namaste Everyone from only DOM using js!';

const heading2 = document.createElement('h2');
heading2.innerHTML = 'Author, Ghanashri!';

const root = document.getElementById('root');
root.appendChild(heading1);
root.appendChild(heading2);