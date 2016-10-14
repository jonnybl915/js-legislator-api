console.log('wired up!')
console.log(jQuery);

//standard forEach loop
var forEach = function(arr, cb) {
        for (var i = 0; i < arr.length; i += 1) {
            cb(arr[i], i, arr);
        }
    }
    //targeting div which will accept the JSON elements.
var legislatorsContaier = document.querySelector('.legislators');

//function which adds JSON data onto page (recieved from APIx )
var putDataOnPage = function(dataFromApi) {

    console.log(dataFromApi);
    forEach(dataFromApi.results, function(legislatorObject) {

        var builderString = '<div class="legislator-card col-md-3">';
        builderString += '<div class="legislator-name">';
        builderString += '<h3>' + legislatorObject.first_name + " " + legislatorObject.last_name; + '</h3>';
        builderString += '<div class="title-and-party">';
        builderString += '<h5>' + legislatorObject.title + ' -- ' + legislatorObject.party + "-" + legislatorObject.state_name + '</h5>';
        builderString += '</div>';
        builderString += '<ul>';
        builderString += '<li>' + 'email: ' + legislatorObject.email + '</li>';
        builderString += '<li>' + 'website: ' + legislatorObject.website + '</li>';
        builderString += '<li>' + 'facebook: ' + legislatorObject.facebook_id + '</li>';
        builderString += '<li>' + 'twitter: ' + legislatorObject.twitter_id + '</li>';
        builderString += '</ul>';
        builderString += '<h6>'+ 'Term End: ' + legislatorObject.term_end + '</h6>';

        builderString += '</div>';
        builderString += '</div>';

        legislatorsContaier.innerHTML += builderString;
    })

}
$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=6690be0dcdfb445192c0f05ce4b4a8d5').then(putDataOnPage)
