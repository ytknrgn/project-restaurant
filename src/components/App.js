import React from 'react';
import Location from "./Location.js"
import MenuItem from "./MenuItem.js"

const foodItems = [
  {
    id: 1,
    name: "salad",
    price: 8
  },
  { id: 2,
    name: "cheeseburger",
    price: 10
  },
  { id: 3,
    name: "steak",
    price: 15
  }
];

const locationItems = [
  { id: 1,
    city: "London",
    phone: '333-33-33'
  },
  { id: 2,
    city: "New York city",
    phone: '555-55-55'
  },
  { id: 3,
    city: 'Bali',
    phone: '222-22-22'
  }
];

class App extends React.Component {
  render(){
    return (
     <div>
      <ul>
        {foodItems.map(item => <MenuItem key={item.id} food={item} />)}
      </ul>
      <ul>
        {locationItems.map(item => <Location key={item.id} location={item} />)}
      </ul>
      </div> 
    )
  }
}

export default App;