import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg",
  ];
  const [active, setActive] = useState(0);

  function loadNextImage() {
    setActive((prev) => {
      if (prev === images.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }
  function loadPrevImage() {
    setActive((prev) => {
      if (prev === 0) {
        return images.length - 1;
      } else return prev - 1;
    });
  }

  useEffect(() => {
    let t = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => {
      clearInterval(t);
    };
  }, []);
  return (
    <div className="flex justify-center items-center m-2 p-2">
      <img
        className="w-20 h-20 cursor-pointer"
        src="https://cdn-icons-png.freepik.com/512/20/20663.png"
        alt=""
        onClick={loadPrevImage}
      />
      <img className="w-100 h-100" src={images[active]} alt="" />

      <img
        className="w-20 h-20 cursor-pointer"
        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        alt=""
        onClick={loadNextImage}
      />
    </div>
  );
};

export default ImageSlider;
