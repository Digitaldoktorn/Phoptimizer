function getImageFromFlickr() {

    // Fetching data from the api (using the flickr.photos.search method from this page: https://www.flickr.com/services/api/). The user can choose an image tag which inserted in the apiUrl
    let tags = document.getElementById('tags').value;
    const apiUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e193d62234d9b4e3ebb94074f4e6c5f6&tags=' + tags + '&format=json&nojsoncallback=1';

    // validation
    if (tags === "") {
        alert('Please enter an image tag')
    }

    fetch(apiUrl)
        // returning the data in json format
        .then(data => data.json()) // man kan lägga in catch eller if-statements här för fånga ev error
        .then(displayImages => generateHtml(displayImages))

    // displaying data in the DOM
    const generateHtml = (data) => {
        const photos = data.photos.photo;

        // creating array of object
        let photosArray = Object.values(photos);
        // console.log(photosArray[0]);

        for (let i = 0; i < photosArray.length; i++) {
            console.log(photosArray[i]['title']);
            const flickrphoto = 'https://farm' + photosArray[i]['farm'] + '.staticflickr.com/' + photosArray[i]['server'] + '/' + photosArray[i]['id'] + '_' + photosArray[i]['secret'] + '.jpg'
            const html = `
        <h5 class="title">Title: ${photosArray[i]['title']}</h5>
        
        <img border="5px" src=${flickrphoto}>`
            const displayImagesDiv = document.querySelector('.displayImages');
            displayImagesDiv.innerHTML = html
        }
    }
}


// document.getElementsByClassName('edit').style.display = 'none';
document.getElementById('button').onclick = function () {
    getImageFromFlickr();
}



const testimage = document.getElementById('testimage');
// ta bort sen
const flickrphotoRendered = document.getElementsByTagName('img');
// console.log('this is: ' + flickrphotoRendered);

const brightnessBtn = document.getElementById('brightness');


brightnessBtn.addEventListener('click', function (e) {
    e.preventDefault();
    testimage.classList.add('brighten')


})

#task - list > ul > li: nth - child(3) > span.name
// ta bort sen ovan

// document.getElementById('brightness').onclick = function () {
//     brightenImage();

// }

// 4. add classes
// taskName.classList.add('name')
// deleteBtn.classList.add('delete')