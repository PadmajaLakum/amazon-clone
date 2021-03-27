import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
          <img className='home__img' 
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                   alt='' />
            <div className='home__row'>
            <Product id='1232312'
            title='All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal'
            price={29.99}
            rating={5}
            image='http://media.corporate-ir.net/media_files/IROL/17/176060/09202018/Alexa-Enabled/Amazon%20Echo%20Plus/Echo%20Plus,%20Charcoal,%20Top.jpg'/>


<Product id='1232312'
            title='All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal'
            price={29.99}
            rating={5}
            image='http://media.corporate-ir.net/media_files/IROL/17/176060/09202018/Alexa-Enabled/Amazon%20Echo%20Plus/Echo%20Plus,%20Charcoal,%20Top.jpg'/>
            <Product id='1232312'
            title='All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal'
            price={29.99}
            rating={5}
            image='http://media.corporate-ir.net/media_files/IROL/17/176060/09202018/Alexa-Enabled/Amazon%20Echo%20Plus/Echo%20Plus,%20Charcoal,%20Top.jpg'/>
       </div>
       <div className='home__row'>
       <Product id='1232312'
            title='All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal'
            price={29.99}
            rating={5}
            image='http://media.corporate-ir.net/media_files/IROL/17/176060/09202018/Alexa-Enabled/Amazon%20Echo%20Plus/Echo%20Plus,%20Charcoal,%20Top.jpg'/>
       
       <Product id='1232312'
            title='All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal'
            price={29.99}
            rating={5}
            image='http://media.corporate-ir.net/media_files/IROL/17/176060/09202018/Alexa-Enabled/Amazon%20Echo%20Plus/Echo%20Plus,%20Charcoal,%20Top.jpg'/>
       </div>
       <div className='home__row'>
       <Product id='1232312'
            title='All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal'
            price={29.99}
            rating={5}
            image='http://media.corporate-ir.net/media_files/IROL/17/176060/09202018/Alexa-Enabled/Amazon%20Echo%20Plus/Echo%20Plus,%20Charcoal,%20Top.jpg'/>
       </div>
        </div>

        
    );
}

export default Home;