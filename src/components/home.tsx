import React from "react";
import "../styles/home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../data";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        {/* Metadata Section */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Intro Section */}
        <div className="intro_sec d-block d-lg-flex align-items-center">
          {/* Background Image */}
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>

          {/* Text Content */}
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                {/* Title */}
                <h2 className="mb-1x">{introdata.title}</h2>

                {/* Animated Text */}
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>

                {/* Description */}
                <p className="mb-1x">{introdata.description}</p>

                {/* Action Buttons */}
                <div className="intro_btn-action pb-5">
                  {/* Portfolio Button */}
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  {/* Contact Button */}
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
