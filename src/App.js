import React from 'react';
import { fetchData } from './api';
import styles from './App.module.css';
import { Cards, Charts, CountryPicker } from './Components';
import coronaImage from './image/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
        // global: '',
    }

    async componentDidMount () {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    // handleClick = async (global) => {
    //     const fetchedData = await fetchData(global)
    //     this.setState({data: fetchedData});
    // }

    handleCountryChange = async ( country ) => {
       const fetchedData = await fetchData( country );

       this.setState({data: fetchedData, country: country});
    //    console.log(fetchedData)
         // console.log(country);
        // fetch the data
        // set the state
    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country = {country} />
            </div>
        )
    }
}

export default App;