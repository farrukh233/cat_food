import "../src/styles/styles.css";
import "../src/styles/reset.css";
import Cat from "./components/Cat";

const data = [
  {
    id: 0,
    title: "фуа-гра",
    description: `10 порций\n мышь в подарок`,
    count: 0,
  },
  {
    id: 1,
    title: "рыбой",
    description: "40 порций 2 мыши в подарок",
    count: 0,
  },
  {
    id: 2,
    title: "курой",
    description: "100 порций 5 мышей в подарок заказчик доволен",
    count: 2,
  },
];

function App() {
  return (
    <div className='background'>
      <h1 className='background_title'>Ты сегодня покормил кота?</h1>
      <div className='wrapper'>
        {data.map(obj => (
          <Cat
            key={obj.id}
            title={obj.title}
            description={obj.description}
            count={obj.count}
            id={obj.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
