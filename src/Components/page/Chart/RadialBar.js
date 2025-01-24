import Chart from "react-apexcharts";

const RadialBar=({temperature,chartColor})=>{
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
      
    return(
        <diV>
          <Chart
          options={options}
          series={options.series}
          type="radialBar"
          width="200"             
        />
        
        </diV>
    );
}

export default RadialBar