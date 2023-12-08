// Declare a new function named search
async function search() {
  // read the user input from the term field in the form searchForm
  let searchTerm = document.forms.searchForm.term.value;
  // empty the input field
  document.forms.searchForm.term.value = '';
  // read the json
  let rawData = await fetch('/api/cats/' + searchTerm);
  // convert json to a javascript data structure
  let cats = await rawData.json();
  // create an variable name that initially is an empty string
  let html = `
    <p>You searched for "${searchTerm}"...</p>
    <p>Found ${cats.length} results.</p>
  `;
  // loop through the cats
  for (let cat of cats) {
    html += `
      <section>
        <h2>${cat.name}</h2>
        <img src="images/${cat.meta.image}">
        <p>${cat.meta.description}</p>
      </section>
    `;
  }
  // Grab the element/tag with the class searchResults
  let searchResultsElement = document.querySelector('.searchResults');
  // Change the content of the searchResults element
  searchResultsElement.innerHTML = html;
}