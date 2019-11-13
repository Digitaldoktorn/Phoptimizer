function getImageFromFlickr() {

    // Fetching data from the Flickr API (using the flickr.photos.search method from this page: https://www.flickr.com/services/api/). The user can choose an image tag which inserted in the apiUrl
    let tags = document.getElementById('tags').value;
    const apiUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e193d62234d9b4e3ebb94074f4e6c5f6&tags=' + tags + '&format=json&nojsoncallback=1';

    // Simple validation
    if (tags === "") {
        alert('Please enter an image tag')
    }

    fetch(apiUrl)
        // Returning the data in json format
        .then(data => data.json())
        .then(displayImages => generateHtml(displayImages))
        .catch(err => console.log(err));

    // Displaying data in the DOM
    const generateHtml = (data) => {
        const photos = data.photos.photo;

        // Creating array of object. By doing this I am able to loop through the data. It works only in the console, I couldn't make it work in the DOM.
        let photosArray = Object.values(photos);
        // console.log(photosArray[0]);

        for (let i = 0; i < photosArray.length; i++) {
            // console.log(photosArray[i]['title']);

            // Concatenating an Url in which I can loop through the data necessary to display an image from the Flickr API
            const flickrphoto = 'https://farm' + photosArray[i]['farm'] + '.staticflickr.com/' + photosArray[i]['server'] + '/' + photosArray[i]['id'] + '_' + photosArray[i]['secret'] + '.jpg'

            // Creating a const that I can render to the DOM
            const html = `
        <h5 class="title">Title: ${photosArray[i]['title']}</h5>
        
        <img border="5px" src=${flickrphoto}>`
            const displayImagesDiv = document.querySelector('.displayImages');
            displayImagesDiv.innerHTML = html
        }
    }
}

document.getElementById('button').onclick = function () {
    getImageFromFlickr();
}

// I could not figure out how to edit the image that is returned from the Flickr API. So to be able to show the image editing functionality I had to mount an image "statically" to the html file.
const testimage = document.getElementById('testimage');
const brightnessBtn = document.getElementById('brightness');
const contrastBtn = document.getElementById('contrast');
const saturateBtn = document.getElementById('saturate');

// Listening to clicks of the edit buttons "Brightness", "Contrast" and "Saturation"
brightnessBtn.addEventListener('click', function (e) {
    e.preventDefault();
    testimage.classList.add('brightness')
})

contrastBtn.addEventListener('click', function (e) {
    e.preventDefault();
    testimage.classList.add('contrast')
})

saturateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    testimage.classList.add('saturate')
})