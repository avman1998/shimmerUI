import { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import ShimmerUI from "./ShimmerUI";

function App() {
  const [memes, setMemes] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://meme-api.com/gimme/20");
        const json = await data.json();
        setMemes(json.memes);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap">
      {!memes ? (
        <ShimmerUI />
      ) : (
        memes.map((meme) => {
          return <MemeCard meme={meme} />;
        })
      )}
    </div>
  );
}

export default App;
