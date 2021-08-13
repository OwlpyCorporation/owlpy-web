import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  faMicrophone,
  faMicrophoneSlash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react-is";
import { useState } from "react";

const Dictaphone = () => {
  const [lang, setLang] = useState("en-US");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({
    transcribing: true,
    listening: true,
  });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: lang,
    });
  };

  return (
    <Fragment>
      <div className="col-lg-10 col-sm-12 col-sm-auto bg-white pt-4 pb-5 mb-5 shadow-lg">
        <div className="card-header bg-transparent">
          <div className="row justify-content-center">
            <div className="col">
              <h4 id="list-item-1" style={{ display: "inline" }}>
                Our examples
              </h4>
            </div>
            <div className="col ">
              <select
                onChange={(event) => {
                  setLang(event.target.value);
                }}
                style={{ float: "right" }}
                className="border-0 text-center border-bottom-2"
                aria-label=".form-select-sm example"
              >
                <option value="en-US">English</option>
                <option value="es-MX">Spanish</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-body fs-3">
          {listening ? "on" : "off"}
          {transcript ? (
            <FontAwesomeIcon
              style={{
                display: "inline-block",
                marginLeft: "10px",
                float: "right",
              }}
              icon={faTrashAlt}
              onClick={resetTranscript}
            ></FontAwesomeIcon>
          ) : (
            ""
          )}
          <FontAwesomeIcon
            icon={listening ? faMicrophone : faMicrophoneSlash}
            style={{ float: "right", display: "block" }}
            onClick={
              !listening ? startListening : SpeechRecognition.stopListening
            }
          >
            Start
          </FontAwesomeIcon>
          <p className="fs-5">{transcript}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Dictaphone;
