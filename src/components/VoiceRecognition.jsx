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

  const handleSpeek = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      document.querySelector("#speek").innerHTML = "Speek";
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-IN",
      });
      document.querySelector("#speek").innerHTML = "Stop";
    }
  };

  if (!browserSupportsSpeechRecognition)
    return <h2>Browser doesn't support Voice recognition.</h2>;
  if (!isMicrophoneAvailable) return <h2>Connect yout Mic</h2>;
  else
    return (
      <section>
        <textarea id="speech-to-text" value={transcript}></textarea>
        <div>
          <button id="speek" onClick={handleSpeek}>
            Speek
          </button>
          <button onClick={resetTranscript}>Reset</button>
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
            Tamil
          </button>
          <button
            onClick={() => {
              SpeechRecognition.startListening({
                continuous: true,
                language: "en-IN",
              });
            }}
          >
            English
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                document.querySelector("#speech-to-text").innerHTML
              );
            }}
          >
            Copy
          </button>
        </div>
      </section>
    );
};

export default VoiceRecognition;
