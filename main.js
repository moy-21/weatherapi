const key = '572557e9cca1a8a39c3fd2dd853de3ac'
const lat = 41.878113
const lon = -87.629799
const country = ''


submitButton()

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByName("zip")[0].value)
    apiCall(document.getElementsByName("zip")[0].value)
}

function submitButton(){
    let button = document.getElementById('button');
    button.addEventListener('click', (e)=>handleSubmit(e) )
}

async function apiCall(zip){
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&units=imperial&appid=${key}`);
    data = result.data
    
    let high = data.main.temp_max
    let low = data.main.temp_min
    let cast = data.weather[0].main
    let humidity = data.main.humidity
    let icon = data.weather[0].icon

    let high_temp= document.getElementById('hightemp')
    high_temp.innerHTML =`${high} °F`
    let low_temp= document.getElementById('lowtemp')
    low_temp.innerHTML =`${low} °F`
    let forecast= document.getElementById('forecast')
    forecast.innerHTML =`${cast}`
    let humidity_= document.getElementById('humid')
    humidity_.innerHTML =`${humidity} %`
    let icon_= document.getElementById('icon')
    icon_.innerHTML =`<img src="http://openweathermap.org/img/w/${icon}.png" class="" alt="..." style="height:150px;">`

}

