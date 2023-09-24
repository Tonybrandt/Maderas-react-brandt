import React from "react";
import "./FindUs.css";

export const FindUs = () => {
  return (
    <section className="encontranos">
      <h2 className="encontranos-title">Encontranos</h2>
      <div className="encontranos__map">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d54318.479362716695!2d-64.40331!3d-31.691166!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDQxJzI4LjIiUyA2NMKwMjQnMTIuMyJX!5e0!3m2!1ses!2sde!4v1684781485562!5m2!1ses!2sde"
          style={{ width: "80%", height: "400px", border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
