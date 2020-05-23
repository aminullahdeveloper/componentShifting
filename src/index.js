import React from "react";
import ReactDOM from "react-dom";
let arrayOfObjects = [
  {
    title: "education"
  },
  {
    title: "award"
  },
  {
    title: "books"
  },
  {
    title: "philosophy"
  },
  {
    title: "experience"
  },
  {
    title: "saboor"
  }
];

const random = (from, to) => Math.floor(Math.random() * (to - from) + from);

const randomStyle = () => {
  return {
    height: random(70, 130),
    background: "red"
  };
};

arrayOfObjects = arrayOfObjects.map(pr => ({ ...pr, style: randomStyle() }));

const FixedComponent = ({ height, items }) => {
  const computedHeight = `${height}px`;

  return (
    <div className="fixed" style={{ height: computedHeight }}>
      {items.map(({ title, style }, id) => (
        <div className="item" key={id} style={style}>
          {title}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(arrayOfObjects);
  }, []);

  const renderComponents = function*() {
    let bucket = [];
    let sumOfHeights = 0;
    const maxHeight = 300;
    let id = 1;

    for (let item of items) {
      const height = item.style.height;

      if (maxHeight > sumOfHeights + height) {
        bucket = [...bucket, item];
        sumOfHeights = sumOfHeights + height;
        continue;
      }

      const items = [...bucket];
      yield <FixedComponent key={id} height={maxHeight} items={items} />;
      bucket = [];
      id = id + 1;
      sumOfHeights = 0;
    }

    id = id + 1;

    yield <FixedComponent key={id} height={maxHeight} items={bucket} />;
  };

  return <div>{[...renderComponents()]}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
