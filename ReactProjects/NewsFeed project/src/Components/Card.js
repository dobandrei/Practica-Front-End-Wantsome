import React, {Component} from 'react';
import CardItem from "./CardItem";
import styles from './Card.module.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        
      ]
    }
  }

  createItem = (event) => {
    event.preventDefault();
    const updateData = {
      name: this.name.value,
      price: this.price.value
    };
    this.setState({data: [...this.state.data, updateData]})
  };

  render() {
    console.log(this.state);
    return (
      <div >
        <form onSubmit={this.createItem} >
          <input type="text" placeholder='name' ref={input => this.name = input}/>
          <input type="text" placeholder='price' ref={input => this.price = input}/>
          <button type='submit'> Save</button>
        </form>

        {this.state.data.map((obj, idx) => {
          return <CardItem name={obj.name} price={obj.price} key={idx}/>
        })}
      </div>
    );
  }
}

export default Card;
