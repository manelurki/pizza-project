import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PizzaForm from './components/PizzaForm';
import PizzaList from './containers/PizzaList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      selectedPizza: {
        id: "",
        topping: "",
        size: "",
        vegetarian: true
      }  
    }
  }

  handleEdit = (pizza) => {
    console.log(pizza)
    this.setState({
        selectedPizza: pizza
    // },() => console.log(this.state))
    })
  }

  onChangeHandler= (event) => {
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        [event.target.name]: event.target.value
      }
    })
  }

  onChangeRadio = (event) => {
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        vegetarian: !this.state.selectedPizza.vegetarian
      }
    })
  }

  onSubmitHandler = () => {
    console.log("submitted")
    //change the pizza in the database
    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`, {
      method: "PATCH",
      headers: 
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(
          this.state.selectedPizza
        )
    })
    .then(resp => resp.json())
    .then(json => {
      const updatedPizzas = this.state.pizzas.map(pizza => {
        return json.id === pizza.id ? json : pizza
      })
      this.setState({
        pizzas: updatedPizzas,
        selectedPizza: {
          id: "",
          topping: "",
          size: "",
          vegetarian: true
        }  
      }, () => console.log(this.state))
    })

    //change it in the ui
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(json => this.setState({pizzas: json}))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          selectedPizza={this.state.selectedPizza}
          onChangeHandler={this.onChangeHandler}
          onChangeRadio={this.onChangeRadio}
          onSubmitHandler={this.onSubmitHandler}
          />
        <PizzaList 
          handleEdit={this.handleEdit} 
          pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
