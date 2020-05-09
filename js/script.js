//User will enter their City in this form
//Show the current city being searched
//Show today's minimum temperature
//Show today's maximum temperature

/*----- constants -----*/

/*----- app's state (variables) -----*/
let weatherData, userInput;
/*----- cached element references -----*/
const $name = $('#name'); 
const $humidity = $('#humidity'); 
const $temp = $('#temp'); 
const $wind = $('#wind'); 
const $input = $('input[type="text"]')
/*----- event listeners -----*/
$('form').on('submit', handleGetData)
/*----- functions -----*/
function handleGetData(event) {
    event.preventDefault(); //Prevents the default behavior of a form submission
    if($input.val()=== "") return; // No Data!
   userInput = ($input.val())
   $input.val(""); //clear input
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=3aa97485a155196e7083ba0223f14371'
    }).then(function(data){
        weatherData = data;
        render();
    }, function(error) {
        console.log(error)
        
    });
}
function render() {
    $name.html(weatherData.name);
    $humidity.html(weatherData.main.humidity);
    $temp.html(weatherData.main.temp);
    $wind.html(weatherData.wind.speed);
    
}