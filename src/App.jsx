import { useEffect, useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

    useEffect(() => {
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    }, []);

    
    if (!browserSupportsSpeechRecognition) {
      return <h2>Browser doesn't support speech recognition.</h2>;
    } else
    return (
      <>
        <h1>chatBOT</h1>
        <p>Recognized Text: {transcript}</p>
      </>
    );
}
export default App;
