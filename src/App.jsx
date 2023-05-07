import { useEffect, useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const [isListening, setIsListening] = useState(true);
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const handleListening = () => {
    if (isListening) {
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
      setIsListening(true);
    } else {
      SpeechRecognition.stopListening();
      setIsListening(false);
    }
  };
  addEventListener("click", handleListening);

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
