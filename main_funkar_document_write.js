
/*
const tag = 'flower';
const apiUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e193d62234d9b4e3ebb94074f4e6c5f6&tags=skyline&format=json&nojsoncallback=1';


const image = 'https://farm66.staticflickr.com/65535/49050182871_dbd90081b2.jpg';

fetch(apiUrl)
    .then(data => data.json())
    .then(displayImages => generateHtml(displayImages))

const generateHtml = (data) => {
    const html = `
        <div class="imgTitle">${data.photos.photo[1]['title']}</div>
        <img src=${image}>
        <div></div>
    `
    const displayImagesDiv = document.querySelector('.displayImages');

    displayImagesDiv.innerHTML = html
}
*/

const tags = 'presidents';
const apiUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e193d62234d9b4e3ebb94074f4e6c5f6&tags=' + tags + '&format=json&nojsoncallback=1';

// const image = 'https://farm66.staticflickr.com/65535/49050182871_dbd90081b2.jpg';

// skriv kommentar här efter kollat pokemon
fetch(apiUrl)
    // returning the data in json format
    .then(data => data.json()) // man kan lägga in catch eller if-statements här för fånga ev error
    .then(displayImages => generateHtml(displayImages))


// display data in the DOM
const generateHtml = (data) => {
    const photos = data.photos.photo;

    // creating array of object
    let photosArray = Object.values(photos);


    for (let i = 0; i < photosArray.length; i++) {
        // console.log(data.photos.photo[i]['farm']);
        // console.log(data.photos.photo[i]['server']);
        console.log(data.photos.photo[i]['id']);
        // console.log(data.photos.photo[i]['secret']);
        console.log(data.photos.photo[i]['title']);
        document.write(data.photos.photo[i]['title'] + '<br>');

        const flickrphoto = 'https://farm' + data.photos.photo[i]['farm'] + '.staticflickr.com/' + data.photos.photo[i]['server'] + '/' + data.photos.photo[i]['id'] + '_' + data.photos.photo[i]['secret'] + '.jpg';

        document.write(`<img src=${flickrphoto}></img><br><br>`)

        // const flickrphoto = 'https://farm' + data.photos.photo[i]['farm'] + '.staticflickr.com/' + data.photos.photo[i]['server'] + '/' + data.photos.photo[i]['id'] + '_' + data.photos.photo[i]['secret'] + '.jpg'
        // const html = `
        //     <h5 class="card-title">Title: ${data.photos.photo[i]['title']}</h5>

        //     <img src=${flickrphoto}>
        //     <div></div>
        // `
        // const displayImagesDiv = document.querySelector('.displayImages');

        // displayImagesDiv.innerHTML = html

    }





}
