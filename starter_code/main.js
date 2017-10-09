console.log('connected');

var cities = ['nyc', 'sf', 'la', 'sydney','austin']

cities.forEach(function(city) {
  addToList(city)
})

function addToList(city) {
    $('#city-type').append('<option>'+ city.toUpperCase() + '</option>')
}

  $('#city-type').change(changeBackground);


  function changeBackground() {
    var selectBox = event.target
    var input = selectBox.value.toLowerCase()
    cities.forEach(function(cityName) {
      if (input === cityName) {
        clearBackground()
        $('body').addClass(cityName)
      }
    })

  }

function clearBackground() {
$('body').removeClass('nyc sf la austin sydney')
}
//
