import React, { useState, useEffect, useCallback } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import * as park from "./data/park.json";
import ParkIco from "./park.svg";
function App() {
  const [viewport, setViewport] = useState({
    latitude: 34.8,
    longitude: 126.4,
    width: "100vw",
    height: "100vh",
    zoom: 14
  });
  const [selectedPark, setSelectedPark] = useState(null);
  const handleKeyPress = useCallback(event => {
    const { key, keyCode } = event;

    if (keyCode === 27 && key === "Escape") {
      setSelectedPark(null);
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
                setSelectedPark(park);
              }}
            >
              <img src={ParkIco} alt="skate park icon"></img>
            </button>
          </Marker>
        ))}
        i
        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => setSelectedPark(null)}
          >
            <h2>{selectedPark.properties.NAME}</h2>
            <div>{selectedPark.properties.DESCRIPTIO}</div>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}

export default App;
