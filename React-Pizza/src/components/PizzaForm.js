import React from "react"

const PizzaForm = ({selectedPizza, onChangeHandler, onChangeRadio, onSubmitHandler}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              value={selectedPizza.topping}
              name="topping"
              onChange={onChangeHandler}
                
              />
        </div>
        <div className="col">
          <select value={selectedPizza.size} 
            disabled={!selectedPizza.id}
            className="form-control"
            name="size"
            onChange={onChangeHandler}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" 
              type="radio" 
              value="Vegetarian" 
              checked={selectedPizza.vegetarian}
              onChange={onChangeRadio}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" 
              type="radio" 
              value="Not Vegetarian" 
              checked={!selectedPizza.vegetarian}
              onChange={onChangeRadio}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={onSubmitHandler}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
