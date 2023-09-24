import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import "./SocialNetworks.css";

export const SocialNetworks = () => {
  return (
    <section className="social">
      <h3 className="title-social">Seguinos en redes sociales</h3>
      <div className="links">
        <a
          className="linki face"
          href="https://www.facebook.com/maderasjb"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          className="linki what"
          href="https://api.whatsapp.com/send/?phone=5493547641550&text&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
        <a
          className="linki insta"
          href="https://www.instagram.com/j.bmaderasmisioneras/"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};
