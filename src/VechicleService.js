import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Vehicle() {
  const [stateVehicle, setVehicleState] = useState([]);
  const [addTableDisplay, setAddTableDisplay] = useState(false);
  const [updateTableDisplay, setUpdateTableDisplay] = useState(false);

  useEffect(() => {
    getVehicle();
  }, []);

  const getVehicle = () => {
    axios
      .get("http://localhost:9000/api/vehicles/vehicle")
      .then(response => {
        setVehicleState(response.data);
      })
  };

  const deleteVehicle = vin => {
    axios
      .delete(`http://localhost:9000/api/vehicles/vehicle/${vin}`)
      .then(response => {
        getVehicle();
      })
  }

  const submit = e => {
    let vin = e.target[0].value;
    let brand = e.target[1].value;
    let model = e.target[2].value;
    let year = e.target[3].value;
    let mileage = e.target[4].value;
    let color = e.target[5].value;
    let customerId = e.target[6].value;
    let data = {
      vin,
      brand,
      model,
      year,
      mileage,
      color,
      customerId
    };
    postVehicle(data);
  };

  const postVehicle = data => {
    axios
      .post("http://localhost:9000/api/vehicles/vehicle", data)
      .then(response => {
        getVehicle();
      })
  };
  /*
  const update = e => {
    let vin = e.target[0].value;
    let brand = e.target[1].value;
    let model = e.target[2].value;
    let year = e.target[3].value;
    let mileage = e.target[4].value;
    let color = e.target[5].value;
    let customerId = e.target[6].value;
    let data = {
      vin,
      brand,
      model,
      year,
      mileage,
      color,
      customerId
    };
    putVehicle(data, vin);
  };
  */

  const update = e => {
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
      color,
    };
    patchVehicle(data, vin);
  };

  /*
  const putVehicle = (data, vin) => {
    axios
      .put(`http://localhost:9000/api/vehicles/vehicle/${vin}`, data)
      .then(response => {
        getVehicle();
      })
  };
  */

  const patchVehicle = (data, vin) => {
    axios
      .patch(`http://localhost:9000/api/vehicles/vehicle/${vin}`, data)
      .then(response => {
        getVehicle();
      })
  };

  return (
    <div>

      {addTableDisplay === false ? (null) : (

        <div className="jumbotron">
          <form onSubmit={e => {
            e.preventDefault();
            submit(e);
            setAddTableDisplay(false)
          }}>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> VIN </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="vin" name="vin" required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Brand </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="brand" name="brand" required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Model </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="model" name="model" required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Year </label>
              <div className="col-sm-10">
                <input type="number" min="1900" max="2900" class="form-control" id="year" name="year" required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Mileage </label>
              <div className="col-sm-10">
                <input type="number" className="form-control" id="mileage" name="mileage" required />
              </div>
            </div>



            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Color </label>
              <div className="col-sm-10">
                <select className="custom-select mr-sm-2" required>
                  <option selected>Choose...</option>
                  <option>White</option>
                  <option>Black</option>
                  <option>Grey</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Other</option>
                </select>
              </div>
            </div>



            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Customer Id </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="customerId" name="customerId" required />
              </div>
            </div>

            <input type="submit" className="btn btn-primary btn-sm" value="Submit" />
          </form>
        </div>)}

      {updateTableDisplay === false ? (null) : (
        <div className="jumbotron">
          <form onSubmit={e => {
            e.preventDefault();
            update(e);
            setUpdateTableDisplay(false)
          }}>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> VIN </label>
              <div className="col-sm-10">
                <input type="text" class="form-control" id="vin" name="vin" required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Brand </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="brand" name="brand" required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Model </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="model" name="model" required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Year </label>
              <div className="col-sm-10">
                <input type="number" min="1900" max="2900" className="form-control" id="year" name="year" required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Mileage </label>
              <div className="col-sm-10">
                <input type="number" className="form-control" id="mileage" name="mileage" required />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Color </label>
              <div className="col-sm-10">
                <select className="custom-select mr-sm-2" required>
                  <option selected>Choose...</option>
                  <option>White</option>
                  <option>Black</option>
                  <option>Grey</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Other</option>
                </select>
              </div>
            </div>


            {/*
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Customer Id </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="customerId" name="customerId" required />
              </div>
            </div>
            */}

            <input type="submit" className="btn btn-secondary btn-sm" value="Update" />
          </form>
        </div>)}

      <div className="container">
        <button onClick={() => { setAddTableDisplay(true); setUpdateTableDisplay(false) }} className="btn btn-outline-primary btn-sm">Vehicle Registration</button>
        <button onClick={() => { setUpdateTableDisplay(true); setAddTableDisplay(false) }} className="btn btn-outline-primary btn-sm">Vehicle Update</button>
      </div>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">VIN</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Year</th>
              <th scope="col">Mileage</th>
              <th scope="col">Color</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {stateVehicle.map(d => (
              <tr>
                <td>{d.vin}</td>
                <td>{d.brand}</td>
                <td>{d.model}</td>
                <td>{d.year}</td>
                <td>{d.mileage}</td>
                <td>{d.color}</td>
                <td>{d.customerId}</td>
                <td>
                  <button onClick={() => deleteVehicle(d.vin)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vehicle;
