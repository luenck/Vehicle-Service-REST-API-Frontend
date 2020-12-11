import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import axios from "axios";

function AddVechicle() {

  const submit = e => {
    let vin = e.target[0].value;
    let brand = e.target[1].value;
    let model = e.target[2].value;
    let year = e.target[3].value;
    let mileage = e.target[4].value;
    let color = e.target[5].value;
    let data = {
      vin,
      brand,
      model,
      year,
      mileage,
      color
    };
    postVehicle(data);
  };

  const postVehicle = data => {
    axios.post("http://localhost:8080/api/add/vehicle", data)
  };

  return (
    <div className="vechicleService">
      <form onSubmit={e =>{
        e.preventDefault();
        submit(e);
      }}>

        <div className="form-group row">
          <label class="col-sm-2 col-form-label"> VIN </label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="vin" name="vin" />
          </div>
        </div>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label"> Brand </label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="brand" name="brand" />
          </div>
        </div>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label"> Model </label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="model" name="model" />
          </div>
        </div>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label"> Year </label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="year" name="year" />
          </div>
        </div>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label"> Mileage </label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="mileage" name="mileage" />
          </div>
        </div>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label"> Color </label>
          <div class="col-sm-4">
            <input type="text" class="form-control" id="color" name="color" />
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
}

export default AddVechicle;
