import { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import ShimmerUI from "./ShimmerUI";

function Body() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      console.log("fetch");
      if (isLoading) return;
      try {
        setIsLoading(true);
        const data = await fetch("https://meme-api.com/gimme/10");
        const json = await data.json();
        setMemes((prev) => [...prev, ...json.memes]);
      } catch (error) {
        console.error("ERROR: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    function handleScroll() {
      if (
        //buffer of 200px
        window.scrollY + window.innerHeight + 200 >=
        document.body.scrollHeight
      ) {
        fetchData();
      }
    }
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-wrap">
      {memes?.map((meme, id) => {
        return <MemeCard key={id} meme={meme} />;
      })}
      {isLoading && <ShimmerUI />}
    </div>
  );
}

export default Body;
