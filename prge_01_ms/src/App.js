import logo from "./logo.svg";
import "./App.css";

const user_list = [
  { imie: "Edwin" },
  { imie: "Grzegorz" },
  { imie: "Mirosław" },
];

console.log(user_list);

function App() {
  return (
    <div className="App">
      {user_list.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
