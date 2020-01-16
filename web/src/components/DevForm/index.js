import React, { useState, useEffect } from "react";

export default function DevForm({ onSubmite }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLogitude] = useState("");
  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLogitude(longitude);
      },
      err => console.log(err),
      { timeout: 30000 }
    );
  }, []);

  async function handleSubmite(e) {
    e.preventDefault();

    await onSubmite({
      github_username,
      techs,
      latitude,
      longitude
    });

    setTechs("");
    setGithub_username("");
  }
  return (
    <form onSubmit={handleSubmite}>
      <div className="input-block">
        <label htmlFor="github_username">Usuario do Github</label>
        <input
          name="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={e => setGithub_username(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            name="latitude"
            type="nuber"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            id="latitude"
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            name="longitude"
            type="nuber"
            value={longitude}
            onChange={e => setLogitude(e.target.value)}
            id="longitude"
            required
          />
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}
