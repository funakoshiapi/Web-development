function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}



const ul = document.getElementById('authors'); // Get the list where we will place our authors


const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users


fetch(url)
    .then((resp) => resp.json()) // Transform the data into json

    .then(function (data) {
        let authors = data.results; // Get the results
        return authors.map(function (author) { // Map through the results and for each run the code below
            let li = createNode('li'), //  Create the elements we need
                img = createNode('img'),
                span = createNode('span');
            containerImg = createNode('div');
            img.src = author.picture.medium; // Add the source of the image to be the src of the img element
            span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
            append(containerImg, img);
            append(li, containerImg); // Append all our elements
            append(li, span);
            append(ul, li);
        })
    })


    .catch(function (error) {
        // If there is any error you will catch them here
    });
