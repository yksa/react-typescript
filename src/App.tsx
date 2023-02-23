import "./App.css";
import Counter from "./components/class/Counter";
import List from "./components/generics/List";

function App() {
  return (
    <div className="App">
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { first: "Bruce", last: "Wayne", id: 1 },
          { first: "Clark", second: "Kent", id: 2 },
          { first: "Princess", last: "Diana", id: 3 },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
