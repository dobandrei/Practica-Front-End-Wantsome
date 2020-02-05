import React from 'react';
import styles from './Card.module.scss';


const changeItem = (event) => {
  event.preventDefault();
  const updateData = {
    name: this.name.value,
    price: this.price.value
  };
  this.setState({data: [...this.state.data, updateData]})
};

const deleteItem = (event) => {

  const updateData = {
    name: this.name.value,
    price: this.price.value
  };
  this.setState({data: [...this.state.data, updateData]})
};
// la edit trebuie sa avem o functie onClick care o sa ia id-ul elementul pe care vrem sa-l editam
// la delete la fel -- cauti obiectul dupa Id-ul pe care dai click si il scoti din array.

const CardItem = ({name, price}) => {
  return (
    <div className={styles.Container} style={{padding: '20px', border: '2px solid grey', margin: '10px'}}>
      <div className={styles.blackPhoto}>

      </div>
      <div >
      <h1>{name}</h1>
      <h2>{price}</h2>

     
      <button >Edit</button>
      <button >Delete</button>
      </div>
    </div>
  );
};

export default CardItem;