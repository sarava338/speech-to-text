import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [recognizedText, setRecognizedText] = useState("");

  const speachToText = () => {
    const SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition;
    // const SpeechGrammarList =
    // window.SpeechGrammarList || webkitSpeechGrammarList;
    const SpeechRecognitionEvent =
      window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    const recognition = new SpeechRecognition();
    // const speechRecognitionList = new SpeechGrammarList();

    // recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    recognition.onresult = (e) => {
      const speachToText = e.results[0][0].transcript;
      setRecognizedText(speachToText);
    };
  };

  useEffect(() => {
    // speachToText();
    addEventListener("click", speachToText);
  });

  return (
    <>
      <h1>chatBOT</h1>
      <p>Recognized Text: {recognizedText}</p>
    </>
  );
}
export default App;
