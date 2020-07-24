import React from 'react';
import './HistoryCardku.css';




const History = ({card}) => {
  return (
    <div>
      {
    card.map((element) => (
      <div className="containerCard">
        <div className='rangka'>
          <img src={element.image} alt={'Makanan'}/>
          <h1>{element.NamaRest}</h1>
          <h1>{element.Location}</h1>
          <h4>{element.Status}</h4>
          <p>{element.Tanggal}</p>
        </div>
      </div>
    )
    )
  }
  </div>  
  )  
}
export default History;
