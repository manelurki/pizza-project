import React from "react"

const Pizza = (props) => {
  
  const isVeg = props.pizza.vegetarian ? "Yes" : "No"
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{isVeg}</td>
      {/* Need to add an event handler */}
      <td><button type="button" onClick={() => props.handleEdit(props.pizza)} className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
