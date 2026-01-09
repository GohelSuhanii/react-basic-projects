// import { useState } from "react";
// // import image1 from "./assets/pics/image1.png";
// // import image2 from "./assets/pics/image2.png";

// function App() {
//   const [currentImage, setCurrentImage] = useState(0);

//   // const images = [image1, image2];

//   const images = Object.values(
//     import.meta.glob("./assets/pics/*.{jpg,png}", {
//       eager: true,
//       import: "default",
//     })
//   );

//   return (
//     <div style={{ textAlign: "center", padding: "40px" }}>
//       <h2>Image Gallery</h2>

//       <img
//         src={images[currentImage]}
//         alt="Gallery"
//         style={{ width: "300px", height: "300px" }}
//       />

//       <div>
//         <button
//           onClick={() => setCurrentImage(currentImage - 1)}
//           disabled={currentImage === 0}
//         >
//           Previous
//         </button>

//         <button
//           onClick={() => setCurrentImage(currentImage + 1)}
//           disabled={currentImage === images.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

// ------ using thumbnail gallery ------
// import { useState } from "react";
// import image1 from "./assets/pics/image1.png";
// import image2 from "./assets/pics/image2.png";

// function App() {
//   const images = [image1, image2];
//   const [currentImage, setCurrentImage] = useState(0);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>ThumbNail-Gallery</h2>
//       <img
//         src={images[currentImage]}
//         alt="main"
//         width="300"
//         style={{ border: "2px solid black" }}
//       />

//       <div
//         style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             width="60"
//             style={{
//               cursor: "pointer",
//               margin: "5px",
//               border:
//                 currentImage === index ? "2px solid blue" : "1px solid gray",
//             }}
//             onClick={() => setCurrentImage(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// ------ using useEffect -- for auto play gallery ------
import { useEffect, useState } from "react";
import image1 from "./assets/pics/image1.png";
import image2 from "./assets/pics/image2.png";
function App() {
  const images = [image1, image2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <img src={images[currentImage]} width="300" />
    </div>
  );
}

export default App;
