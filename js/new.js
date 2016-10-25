//cannot perform forEach on a query selected all statement bc they ARE NOT ARRAYS

//======================
// CUSTOM MAP FUNCTION
//======================

// var myMap = function(arr, cbFn) {
//   var arrBuilder = [];
//   for (var i = 0; i < arr.length; i++) {
//     var output = cbFn(arr[i], i, arr)
//     arrBuilder.push(output);
//   }
// }


$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=6690be0dcdfb445192c0f05ce4b4a8d5')
    .then(function(serverResponse) {
        console.log(serverResponse);
        var arrayOfLegislators = serverResponse.results;


        arrayOfLegislators.forEach(function(el) {
            document.querySelector('#app-container').innerHTML += "<h3>" + el.first_name + ' | ' + el.state_name + '</h3>'
        });

        var transformedArrayCopy = arrayOfLegislators.map(function(congoPerson) {
          var fullNameAndTitle = congoPerson.title + " " + congoPerson.first_name;
          //console.log(fullNameAndTitle);
        })

        var filteredArrayCopy = arrayOfLegislators.filter(function(congoPerson){
          if(congoPerson.chamber === 'senate') {
              return true;
          } else {
            return false;
          }
        })
        console.log('filteredArrayCopy', filteredArrayCopy);
    });
