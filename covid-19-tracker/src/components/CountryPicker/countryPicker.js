import React, { useState, useEffect } from 'react';

//importing from material ui
import { NativeSelect, FormControl } from '@material-ui/core'
//Native select is used to select different countries

//importing fetched each country data from api
import {fetchCountries} from '../../api/api';

//importing css
import styles from './countryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect (()=>{
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries());

        }
        fetchAPI();
    }, [setFetchedCountries]);//pass [setFetchedCountries] so that when certain country selected, it stops their

    //native select tag is used to select different countries when change, thats why onchange use here
    //after selecting country, it fetch all required information about that country from api from 
    //fetchCountries function
 
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;