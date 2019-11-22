// jshint esversion:6
var cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];


$(function() {
  let makeTemplate = Handlebars.compile($('#make-options').html());
  let modelTemplate = Handlebars.compile($('#model-options').html());
  let priceTemplate = Handlebars.compile($('#price-options').html());
  let yearTemplate = Handlebars.compile($('#year-options').html());
  let carTemplate = Handlebars.compile($('#car-template').html());
  let $makeSelect = $('#make-select');
  let $modelSelect = $('#model-select');
  let $priceSelect = $('#price-select');
  let $yearSelect = $('#year-select');
  let $cars = $('.cars');
  let currentFilter = cars;

  function unique(prop, data) {
    return data.map(function(obj) {
      return obj[prop];
    }).filter(function(el, idx, arr) {
      return idx === arr.indexOf(el);
    }).sort().map(function(el) {
      let obj = {};
      obj[prop] = el;
      return obj;
    });
  }

  $makeSelect.html(makeTemplate({makes: unique('make', cars)}));
  $modelSelect.html(modelTemplate({models: unique('model', cars)}));
  $priceSelect.html(priceTemplate({prices: unique('price', cars)}));
  $yearSelect.html(yearTemplate({years: unique('year', cars)}));
  $cars.html(carTemplate({cars: cars}));

  $('select').on('change', function(e) {
    console.log('the ' + $(this).attr('name') + ' field is now ' + $(this).val());

    currentFilter = cars;

    $('select').each(function() {
      let $this = $(this);
      currentFilter = currentFilter.filter(function(car) {
        // filter car collection for prop determined by attr(name) and value
        // determined by val()
      });
    });
  });
});
