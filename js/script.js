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
$('form').on('submit', handleGetData) //lets user submit form request
/*----- functions -----*/
function handleGetData(event) {
    event.preventDefault(); //stops the default behavior
    if($input.val()=== "") return; 
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
