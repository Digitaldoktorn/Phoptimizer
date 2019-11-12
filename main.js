function getImageFromFlickr() {

    // Fetching data from the api. The user can choose an image tag which inserted in the apiUrl
    let tags = document.getElementById('tags').value;
    const apiUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e193d62234d9b4e3ebb94074f4e6c5f6&tags=' + tags + '&format=json&nojsoncallback=1';

    fetch(apiUrl)
        // returning the data in json format
        .then(data => data.json()) // man kan lägga in catch eller if-statements här för fånga ev error
        .then(displayImages => generateHtml(displayImages))

    // displaying data in the DOM
    const generateHtml = (data) => {
        const photos = data.photos.photo;

        // creating array of object
        let photosArray = Object.values(photos);


        for (let i = 0; i < photosArray.length; i++) {

            const flickrphoto = 'https://farm' + data.photos.photo[i]['farm'] + '.staticflickr.com/' + data.photos.photo[i]['server'] + '/' + data.photos.photo[i]['id'] + '_' + data.photos.photo[i]['secret'] + '.jpg'
            const html = `
        <h5 class="title">Title: ${data.photos.photo[i]['title']}</h5>
        
        <img border="5px" src=${flickrphoto}>`
            const displayImagesDiv = document.querySelector('.displayImages');
            displayImagesDiv.innerHTML = html
        }
    }

}

document.getElementById('button').onclick = function () {
    getImageFromFlickr();
}