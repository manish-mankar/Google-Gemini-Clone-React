import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.manish_icon} alt="" className="manish-image" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Manish.</span>
              </p>
              <p className="para">How can I help you today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest the best parks to visit in a city with descriptions.
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Write code for a specific task, including edge cases.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Summarize the major events of the Cold War.</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Write lyrics to a song about heartbreak.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.manish_icon} alt="" />
              <p className="para-text">
                <mark>{recentPrompt}</mark>
              </p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p>{resultData}</p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a promt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img src={assets.send_icon} alt="" onClick={() => onSent()} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
