import React, { useState } from "react";
import { addMeteorite } from "../lib/controller";
import { GeoPoint } from "firebase/firestore";

function Create() {
  const [coordinates, setCoordinates] = useState<GeoPoint>();
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [visible, setVisible] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  //convert lat and long to number
  //and then set coordinates to (lat, long)
  const addNewMeteorite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCoordinates(new GeoPoint(parseInt(latitude), parseInt(longitude)))
    addMeteorite({
        coordinates,
        name,
        shortDescription,
        visible,
    });
    console.log("successfully added a new Meteorite");
  };

  return (
    <div className="create">
      <h2>Add a new meteorite:</h2>
      <form onSubmit={(e) => addNewMeteorite(e)}>
        <label>Meteorite latitude:</label>
        <input
          type="text"
          required
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <label>Meteorite longitude:</label>
        <input
          type="text"
          required
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <label>Meteorite name:</label>
        <textarea
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        
        <label>Meteorite description:</label>
        <textarea
          required
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        ></textarea>

        <label>Visible</label>
        <select value={visible} onChange={(e) => setVisible(e.target.value)}>
          <option value=""> </option>
          <option value="True">True</option>
          <option value="False">False</option>
          </select>

        <button>Add Meteorite</button>
      </form>
    </div>
  );
}

export default Create;
