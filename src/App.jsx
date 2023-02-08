import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);

  const convertToArray = () => {
    //Create array
    const cleanedText = text.replace(/[^A-Za-z']/g, " ");
    const words = cleanedText.split(" ");
    const uniqueWords = [...new Set(words)];

    const allWords = uniqueWords.filter((element) => {
      if (element !== "") {
        return element;
      }
    });

    setWords(allWords);
  };

  function onChangeText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Word List Generator</h1>
      <form action="">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={onChangeText}
          value={text}
        ></textarea>
        <input type="button" value="Create" onClick={convertToArray} />
      </form>
    </div>
  );
}

export default App;
