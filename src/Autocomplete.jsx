import React, { useState, useEffect } from "react";

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [cache, setCache] = useState({});
  const [showOptions, setShowOptions] = useState(false);

  async function fetchOptions() {
    if (cache[query]) {
      setOptions(cache[query]);
      return;
    }
    try {
      const res = await fetch(
        `https://www.google.com/complete/search?q=${query}&client=firefox`
      );
      const data = await res.json();
      setOptions(data[1]);
      setCache((prev) => {
        return {
          ...prev,
          [query]: data[1],
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const t = setTimeout(() => {
      fetchOptions();
    }, 200);
    return () => clearTimeout(t);
  }, [query]);
  return (
    <div className="">
      <div className="flex flex-col m-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-black p-2"
          onFocus={() => setShowOptions(true)}
          onBlur={() => setShowOptions(false)}
        />
        {options.length > 0 && showOptions && (
          <ul className="border border-black p-2">
            {options?.map((op) => {
              return (
                <li key={op} className="cursor-pointer hover:bg-green-200 px-2">
                  {op}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
