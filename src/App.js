import React, {useState} from "react";
import "./styles.css";

let arrayOfObjects = [{
  title: "karim"
}, {
  title: "fawad"
}, {
  title: "karim"
}, {
  title: "fawad"
}, {
  title: "karim"
}, {
  title: "fawad"
}, {
  title: "karim"
}, {
  title: "fawad"
}];

const FirstComponent = ({items}) => {
      
  return <div className="first" style={{height: "150px"}}>
   {items.map(({title}, id) => <div key={id} style={{height:"50px"}}>{title}</div>)}
   </div>
}

const SecondComponent = ({items}) => {
  return <div className="second" style={{height: "150px"}}>
  {items.map(({title}, id) => <div key={id} style={{height:"50px"}}>{title}</div>)}
  </div>
}

const App = () => {
const [items, setItems] = React.useState([]);
React.useEffect(() => {
setItems(arrayOfObjects);
},[]);

return <div>
<FirstComponent items={items.slice(0, 3)}/>
<SecondComponent items={items.slice(4)}/>
</div>
}
