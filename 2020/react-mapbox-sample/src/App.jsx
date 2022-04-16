import React, { useState, useEffect, useCallback } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import * as park from "./data/park.json";
import * as area from "./data/area.json";
import * as code from "./data/code.json";
import CodeIco from "./code.svg";
import ParkIco from "./park.svg";
import AreaIco from "./area.svg";
function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.5531,
    longitude: 126.9919,
    width: "100vw",
    height: "100vh",
    zoom: 12
  });
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [selectedCode, setSelectedCode] = useState(null);
  const handleKeyPress = useCallback(event => {
    const { key, keyCode } = event;

    if (keyCode === 27 && key === "Escape") {
      setSelectedPoint(null);
    }
  }, []);
  const _onResize = useCallback(() => {
    setViewport({
      ...viewport,
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("resize", _onResize);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  const _onViewportChange = viewport => {
    console.log(viewport);
    setViewport(viewport);
  };
  return (
    <div className="App">
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="style.json"
        onViewportChange={_onViewportChange}
      >
        {park.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPoint(park);
              }}
            >
              <img src={ParkIco} alt="skate park icon"></img>
            </button>
          </Marker>
        ))}
        {area.features.map(area => (
          <Marker
            key={area.properties.PARK_ID}
            latitude={area.geometry.coordinates[1]}
            longitude={area.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPoint(area);
              }}
            >
              <img src={AreaIco} alt="skate park icon"></img>
            </button>
          </Marker>
        ))}
        {code.features.map(code => (
          <Marker
            key={code.properties.PARK_ID}
            latitude={code.geometry.coordinates[1]}
            longitude={code.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedCode(code);
              }}
            >
              <img src={CodeIco} alt="skate park icon"></img>
            </button>
          </Marker>
        ))}
        {selectedPoint ? (
          <Popup
            latitude={selectedPoint.geometry.coordinates[1]}
            longitude={selectedPoint.geometry.coordinates[0]}
            onClose={() => setSelectedPoint(null)}
          >
            <h2>{selectedPoint.properties.NAME}</h2>
            <div>{selectedPoint.properties.DESCRIPTIO}</div>
            <div>{selectedPoint.properties.NUM_SUBWAY}</div>
          </Popup>
        ) : null}
        {selectedCode ? (
          <Popup
            latitude={selectedCode.geometry.coordinates[1]}
            longitude={selectedCode.geometry.coordinates[0]}
            onClose={() => setSelectedCode(null)}
          >
            <h2>{selectedCode.properties.NAME}</h2>
            <div>{selectedCode.properties.ADDRESS}</div>
            <div>{selectedCode.properties.SUBWAY}</div>
            <div>{selectedCode.properties.TIME}</div>
            <div>{selectedCode.properties.SALARY}</div>
            <ul>
              {selectedCode.properties.NOTES.map(low => (
                <li>{low}</li>
              ))}
            </ul>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}

export default App;
