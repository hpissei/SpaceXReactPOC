import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

type LauncDetailsProps = {
  id?: number;
  value?: any;
};

function ViewLaunchDetailsByIdComponent(props: LauncDetailsProps) {
  const [result, setResult] = useState([]);

  const location = useLocation();

  React.useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/${location.state.id}`) //`https://api.spacexdata.com/v3/launches/{props.id}`) // ("https://localhost:7289/Launch/" + props.id)
      .then((response) => {
        console.log(response.data);
        setResult(response.data);
        console.log("location " + location.state.id);
      })
      .catch(function (error) {
        console.log("id error" + error);
      });
  }, []);

  return (
    <div className="container">
      <p>Launch Details</p>
      <div className="row">
        <script>alert(props.value["flight_number"])</script>
        {/* <div className="">Flight Number: {props.value["flight_number"]}</div> */}
        <div className="">Mission Name: </div>
      </div>
      <div className="row">
        <div className="">Launch Year: </div>{" "}
        <div className="">Launch Date: </div>
      </div>
      <div className="row">
        <div className="">Rocket Name: </div>{" "}
        <div className="">Rocket Type: </div>
      </div>
      <div className="row">
        <div className="">Site Name: </div> <div className="">Site Name: </div>
      </div>
      <div className="row">
        <div className="">Rocket Name: </div>{" "}
        <div className="">Rocket Type: </div>
      </div>
      <div className="row">Images mission_patch</div>
    </div>
  );
}

export default ViewLaunchDetailsByIdComponent;
