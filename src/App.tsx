/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Profile from "./Profile";
// import Gallery from "./Gallery";
// import "./App.css";

// export default function App() {
//   return (
//     <div>
//       <Profile />
//       <Gallery />
//     </div>
//   );
// }

// menggunakan sintaks js di dalam jsx dengan { }
const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "white",
  },
};

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={baseUrl + person.imageId + person.imageSize + ".jpg"}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// menggunakan props
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl={baseUrl + person.imageId + person.imageSize + ".jpg"}
        imageSize={70}
        profession="Fisikawan dan kimiawan"
        discovery="polonium (unsur kimia)"
        awards={[
          "Penghargaan Nobel Fisika",
          "Penghargaan Nobel Kimia",
          "Medali Davy",
          "Medali Matteucci",
        ]}
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl={baseUrl + person.imageId + person.imageSize + ".jpg"}
        imageSize={70}
        profession="Ahli Geokimia"
        discovery="sebuah metode untuk mengukur karbon dioksida pada air laut"
        awards={["Penghargaan Miyake Geokimia", "Penghargaan Tanaka"]}
      />
    </div>
  );
}

function Profile({ name, imageUrl, imageSize, profession, discovery, awards }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profesi: </b>
          {profession}
        </li>
        <li>
          <b>Penghargaan: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Telah Menemukan: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}
