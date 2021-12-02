import React,{useState} from 'react';
import axios from "axios";
import './Style.css'

function App() {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('');


    const getWeather = () => {
        axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5867d88ceb8b86174a687db068ee442a
`)
            .then(({data}) => setWeather(data))
    };
    return(
        <section className='weather'>
        <div className='App'>
            <h1>Прогноз погоды</h1>
            <div>
                <input type="text" onChange={(e)=> setCity(e.target.value)}/>
                <button className='button' type='button' onClick={()=>getWeather()}>получить</button>
            </div>
            {JSON.stringify(weather)==='{}'
            ? 'Здесь будет ваша погода'
            :<div>
                    <h2>Город: {weather.name}</h2>
                    <p>Страна: {weather.sys.country}</p>
                    <div className='emir'>
                    <p> Температура : {Math.round(weather.main.temp-273.15)} °C</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>

                    </div>
                    <h3>Скорость ветра: {weather.wind.speed}</h3>
                    <div className='Sun'>
                    <h4>Восход: {weather.sys.sunrise} </h4>
                        <h5>Закат: {weather.sys.sunset}</h5>
                    </div>
                </div>
            }


        </div>
        </section>
    )


}
export default App;