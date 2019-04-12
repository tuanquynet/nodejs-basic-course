const fs = require('fs');
// "data:image/png;base64," part removed
const base64str =
  'iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAd0SU1FB9oCGQQEL+AUjh0AAAExSURBVDhPY7ylKvufgRoAZBBerCz7/6aCHH41IMcQMuSOgfT/+86S/28p4bcQu0EgV8jJ/b8uJP//cbTY/0/ruf7fkJD/f0NGDqfrMA0CGnLHSPr/A3cJIC3z//183v9/vzL+f+gr8f+erdT/+05A16kBXaeC6kIMg24qyv2/YyL9/+Nq7v9/3jD9//eT8f///wz//35k+v/zDuv/pxkiQFcRYRAozG7KAwNXXfb/+8U8YENA+PdL5v+PwsT+3wR6D9014JjHFdjXhRX+v2oXgBvy+zXz/9t6MuCww6YHu0HAGLqtLfP/01au/8+Lhf/fNZX6/3k71/9n+cL/b0jJk2AQKMANZf7fs5ECapT7f0Ma4tV7DlJYvYXXa6BwgCdEYCzdBLoSX8LEnyAJpXokeQCM6bKQpKqlcAAAAABJRU5ErkJggg==';

const imgBuffer = Buffer.from(base64str, 'base64');

fs.writeFile('vi.png', imgBuffer, err => {
  console.log('Write success');
});