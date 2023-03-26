import React, { useState, useEffect} from 'react';
//importing daily data from api folder
import { fetchDailyData } from '../../api/api';

//importing css
import styles from './charts.module.css'


//import charts
import { Line, Bar, Pie} from 'react-chartjs-2';
const Charts = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {
    const [dailyData, setDailyData] = useState({});
  
    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
  
        setDailyData(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);

    const lineChart = (
        dailyData.length
        ? (
            <Line 
            data={{
                labels: dailyData.map(({date})=>date),
                datasets: [{
                    data: dailyData.map(({ confirmed })=>confirmed),
                    label: 'Infected',
                    borderColor: 'rgba(250, 126, 10, 1)',
                    backgroundColor: 'rgba(250, 126, 10, 0.59)',
                    fill: true,

                }, {
                    data: dailyData.map(({ deaths })=>deaths),
                    label: 'Deaths',
                    borderColor: 'rgba(228, 12, 12, 1)',
                    backgroundColor: 'rgba(228, 12, 12, 0.59)',
                    fill: true,

                }],
            }}
            options={{
                legend: {display:true, position:'right'},
                title:{ 
                    display:true, 
                    text:`Current Pandemic situation in ${country ? country : "Globe"}`,
                    fontColor: "#000",
                    fontSize: 15,
                },

            }}
        />):null

    );
    const barChart = (
        confirmed
        ? (
            <Bar 
                data ={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: 'People',
                        backgroundColor:[ 
                            'rgba(250, 126, 10, 0.8)',
                            'rgba(228, 210, 12, 0.8)',
                            'rgba(228, 12, 12, 0.8)'
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]

                }}
                options={{
                    legend: {display:false},
                    title:{ 
                        display:true, 
                        text:`Current Pandemic situation in ${country ? country : "Globe"}`,
                        fontColor: "#000",
                        fontSize: 15,
                    
                    },
                }
            }
            
            />
        ) : null
    );

    const pieChart = (
        confirmed
        ? (
            <Pie 
                data ={{
                    labels: ["Infected", "Deaths", "Recoverd"],
                    datasets: [{
                        label: 'People',
                        backgroundColor:[ 
                            'rgba(250, 126, 10, 0.8)',
                            'rgba(228, 12, 12, 0.8)',
                            'rgba(228, 210, 12, 0.8)',
                        ],
                        borderColor: [ 
                            'rgba(250, 126, 10, 1)',
                            'rgba(228, 12, 12, 1)',
                            'rgba(228, 210, 12, 1)',
                        ],
                        data:[confirmed.value, deaths.value, recovered.value]
                    }]

                }}
                options={{
                    responsive: true,
                    legend: {display:true, position:"right"},
                    //title:{ display:true, text:`Current Pandemic situation in ${country ? country : "Globe"}`},
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 20,
                            bottom: 0,
                        }
                    }
                
                }}
            
            />
        ) : null
    );

//     <div className={styles.container}>
    //     {country ? barChart : lineChart}
    //     {pieChart}
//      </div>  

//This div means if any country is selected, then show bar chart, otherwise line chart and I have made
//pie chart compulsory in any of the case
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
            {pieChart}
        </div>
    );
};
export default Charts;