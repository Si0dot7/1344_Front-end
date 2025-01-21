import './Dashboard.css';
import {useEffect, useState} from 'react'
import Chart from "react-apexcharts";

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

    const options = {
      chart: {
        height: 200,
        type: "radialBar",
      },
    
      series: [temperature],
      colors: [chartColor],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            background: "#293450"
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15
            }
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: "13px"
            },
            value: {
              color: "#fff",
              fontSize: "30px",
              show: true,
              formatter: function (val) {
                return `${val}°C`;
              }
              
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ['#fefefe'],
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ['Current']
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
          </form>
        </section>
        <div className='chart-1'>
                    <Chart
                      options={options}
                      series={options.series}
                      type="radialBar"
                      width="300"
                
                />
                 <Chart
                      options={options}
                      series={options.series}
                      type="radialBar"
                      width="300"
                
                />
        </div>
      </div>
    );
  }

export default Dashboard