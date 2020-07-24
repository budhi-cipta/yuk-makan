import React from 'react';
import bakso from './Asset/Bakso.jpeg'
import starbuck from './Asset/Starbuck.jpeg';
import empek from './Asset/Empek.jpeg';
import History from './Component/HistoryCard';
import './App.css';


function App() {
  let data = [
    {
        image: bakso,
        NamaRest:'Bakso kartika',
        Location:'sudirman',
        Status:'belum dikirim',
        Tanggal:'1 juni 2020'
    },
    {
        image:starbuck,
        NamaRest:'starbuck',
        Location:'rawamangun',
        Status:'belum dikirim',
        Tanggal:'1 juni 2020'
    },
    {
        image:empek,
        NamaRest:'Empek juara',
        Location:'gatsu',
        Status:'belum dikirim',
        Tanggal:'1 juni 2020'
    },
  ];

  return (
      <div className="judul">
        <h1>{'History Belanjamu'.toUpperCase()}</h1>
        <History card = {data}/>
      </div>
  );
}


export default App;
