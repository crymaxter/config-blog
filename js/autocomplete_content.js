document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('.l-wrapper.in-post.js-animation-wrapper h2');
  console.log("Encabezados de tabla de contenido");
  console.log(headings);
  const tocContainer = document.querySelector('.toc-container');
  const tocList = tocContainer.querySelector('.toc-list');
  
  headings.forEach((heading) => {
    const level = heading.tagName.slice(1);
    const title = heading.textContent;
    const anchor = heading.id;

    const tocItem = document.createElement('li');
    tocItem.classList.add(`toc-level-${level}`);
    const tocLink = document.createElement('a');
    tocLink.setAttribute('href', `#${anchor}`);
    tocLink.textContent = title;
    tocItem.appendChild(tocLink);

    tocList.appendChild(tocItem);
  });
});