let id = 100;
// let description = 'This is The Description ';
// let title = 'And This is The Title';


const title = document.querySelector('#title');
const description = document.querySelector('#description');
const btn = document.querySelector('button');

let options = {
	method: 'POST',
	body: JSON.stringify({
		userId: id,
		body: description.value,
		title : title.value,
	}),

	headers: {
		'Content-type' : 'application/json'
	}
};

btn.addEventListener('click', 
fetch('https://jsonplaceholder.typicode.com/todos/', options)
      .then(response => response.json())
      .then(json => console.log(json))
	  .catch(error => console.log(error)))

