import './Dashboard.css';
import {useEffect, useState} from 'react'
import RadialBar from './Chart/RadialBar';
import Area from './Chart/Area';
import './Chart/Chart.css'
import BasicBar from './Chart/BasicBar';


const Dashboard=()=>{
    const apiKey = 'bac34d482d2ded2bf7862905d5201f0a'
    const [city,setCity] = useState({})
    const [input,setInput] = useState('')
    const [name,setName] = useState('Bangkok')
    const [temperature,setTemperature] = useState(0)
    const [chartColor,setChartColor] = useState('#4949f0')
 
    const checkData=(e)=>{
      e.preventDefault()
      setName(input)
      console.log(input)
    }    
  
    useEffect(()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
      fetch(url)
      .then(res=>res.json()) 
      .then(data=>{
        setCity(data)
        const tempInC = (data.main?.temp-273).toFixed(0)
        setTemperature(tempInC)

        if(tempInC>25 && tempInC<=30){
          setChartColor('#ee8b39')
        }
        else if(tempInC>30){
          setChartColor('#ee4139')
        }
        else{
          setChartColor('#4949f0')
        }
      })
    },[name])
  
    const convertTemp=(k)=>{
      return (k-273).toFixed()
    }

    return (
      <div className="App">
        <section>
          <div className='location'>
            <h1 className='city'>{city.name}</h1>
            <p className='state'>{city.sys?.country}</p>
          </div>
          <div className='card'>
            <div className='weather'>
              <h1>{convertTemp(city.main?.temp)}&deg;C</h1>
              <small>สูงสุด: {convertTemp(city.main?.temp_max)}&deg;C , ต่ำสุด: {convertTemp(city.main?.temp_min)}&deg;C</small>
            </div>
            <div className='info'>
              <div className='status'>{city.weather?.[0]?.main}</div>
              <div className='humidity'>humidity: {city.main?.humidity}</div>
              <div className='wind'>wind: {city.wind?.speed}</div>
            </div>                   
          </div>
          <form>
          <div className='input'>            
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <button type='submit' onClick={checkData}>Submit</button>           
          </div>
          <p>//ป้อนชื่อจังหวัดหรือประเทศโดยขึ้นต้นด้วยตัวพิมพ์ใหญ่</p>
          </form>     
        </section>
        <div className='chart'>
            <div className='radial'>
              <RadialBar temperature={temperature} chartColor={chartColor}/>
              <RadialBar temperature={temperature} chartColor={chartColor}/>
              <RadialBar temperature={temperature} chartColor={chartColor}/>
            </div>
            <div className='manyChart'>
              <Area/>
              <BasicBar/>
            </div>
            <div className='manyChart'>
              <Area/>
              <BasicBar/>
            </div>
          </div>
        
      </div>
    );
  }

export default Dashboard