import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardList = data.map((card) => <Card key={card.id} {...card} />);

  return (
    <div>
      <Header />
      <main>
        <Journal>{cardList}</Journal>
      </main>
    </div>
  );
}

function Journal({ children }) {
  return <div>{children}</div>;
}

export default App;
