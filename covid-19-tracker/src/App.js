import React from 'react';

//importing components
import Cards from './components/Cards/cards';
import Charts from './components/Charts/charts';
import CountryPicker from './components/CountryPicker/countryPicker';

//importing css
import styles from './App.module.css';

import { fetchData } from './api/api';

//importing image
//import covidImage from './images/covid.png';
import covidImage from './images/red_covid_3.png';

//importing header
import Header from "./components/header/Header";

//importing footer
import Footer from "./components/footer/Footer";

import { Typography } from '@material-ui/core'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }
  //handleCountryChange method is used to change countries or to handle country
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <Header className={styles.headfoot}/>
        <div className={styles.container}>
          <img className={styles.image} src={covidImage} alt="Covid-19 Pandemic"/>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Typography color="textSecondary" className={styles.centre}>Last Updated: {new Date(data.lastUpdate).toDateString()}</Typography>
          <Cards data={data} />
          <Charts data={data} country={country} /> 
        </div>
        <Footer className={styles.headfoot}/>
      </div>
    );
  }
}

export default App;