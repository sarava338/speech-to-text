import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceRecognition = () => {
  const {
    listening,
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const placeHolder = `  
  
  You can't type here.
  
  By pressing SPEEK button, You can type here.
  
  By pressing RESET button, clear the box you have spoke.
  
  By pressing COPY button you can copy the text just spoke.
  
  You can change language by pressing TAMIL & ENGLISH buttons.`;

  const handleSpeek = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      document.querySelector("#speek").innerHTML = "SPEEK";
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-IN",
      });
      document.querySelector("#speek").innerHTML = "STOP";
    }
  };

  if (!browserSupportsSpeechRecognition)
    return <h2>Browser doesn't support Voice recognition.</h2>;
  if (!isMicrophoneAvailable) return <h2>Connect yout Mic</h2>;
  else
    return (
      <section>
        <textarea
          id="speech-to-text"
          value={transcript}
          placeholder={placeHolder}
        ></textarea>
        <div>
          <button id="speek" onClick={handleSpeek}>
            SPEEK
          </button>
          <button onClick={resetTranscript}>RESET</button>
        </div>
        <div>
          <button
            onClick={() => {
              SpeechRecognition.startListening({
                continuous: true,
                language: "ta-IN",
              });
            }}
          >
            TAMIL
          </button>
          <button
            onClick={() => {
              SpeechRecognition.startListening({
                continuous: true,
                language: "en-IN",
              });
            }}
          >
            ENGLISH
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                document.querySelector("#speech-to-text").innerHTML
              );
            }}
          >
            COPY
          </button>
        </div>
      </section>
    );
};

export default VoiceRecognition;
