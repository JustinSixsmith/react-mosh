import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: 'Product1',
        quantity: 1,
      },
      {
        id: 2,
        title: 'Product2',
        quantity: 1,
      },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;

// import { useState } from 'react';

// const App = () => {
//   const [pizza, setPizza] = useState({
//     name: 'Spicy Pepperoni',
//     toppings: ['Mushrooms'],
//   });

//   const handleClick = () => {
//     setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
//   };

//   return (
//     <div>
//       {pizza.toppings.map((topping) => topping).join(', ')}
//       <br />
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';

// const App = () => {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: 'John',
//     },
//   });

//   const handleClick = () => {
//     setGame({ ...game, player: { ...game.player, name: 'Bob' } });
//   };

//   return (
//     <div>
//       {game.player.name}
//       <button onClick={handleClick}>Change Name</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';
// import NavBar from './components/NavBar';
// import Cart from './components/Cart';

// const App = () => {
//   const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
//     </div>
//   );
// };

// export default App;

// import { produce } from 'immer';
// import { useState } from 'react';

// const App = () => {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: 'Bug 1', fixed: false },
//     { id: 2, title: 'Bug 2', fixed: false },
//   ]);

//   const handleClick = () => {
//     // setBugs(bugs.map(bug => bug.id === 1 ? (...bug, { fixed: true }) : bug));
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? 'Fixed' : 'New'}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';

// const App = () => {
//   const [tags, setTags] = useState(['happy', 'good', 'bad']);

//   const handleClick = () => {
//     // Add
//     setTags([...tags, 'exciting']);

//     // Remove
//     setTags(tags.filter((tag) => tag !== 'happy'));

//     // Update
//     setTags(tags.map((tag) => (tag === 'happy' ? 'goodness' : tag)));
//   };

//   return (
//     <div>
//       {tags.map((tag) => console.table(tag))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';

// const App = () => {
//   const [customer, setCustomer] = useState({
//     name: 'John',
//     address: {
//       street: '123 Main St',
//       city: 'New York',
//       state: 'NY',
//       zip: '10001',
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zip: '10002' },
//     });
//   };

//   return (
//     <div>
//       {customer.address.zip}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';

// const App = () => {
//   const [drink, setDrink] = useState({
//     title: 'Americano',
//     price: 5,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, price: 10 });
//   };

//   return (
//     <div>
//       {drink.price}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default App;

// import Message from './Message';

// const App = () => {
//   return (
//     <div>
//       <Message />
//     </div>
//   );
// };

// export default App;

// import Like from './components/Like';

// function App() {
//   return (
//     <div>
//       <Like onClick={() => console.log('Clicked')} />
//     </div>
//   );
// }

// export default App;

// import { BsFillCalendarFill } from 'react-icons/bs';

// function App() {
//   return (
//     <div>
//       <BsFillCalendarFill color="red" size={30} />
//     </div>
//   );
// }

// export default App;

// import ListGroup from './components/ListGroup';

// const App = () => {
//   let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';
// import Alert from './components/Alert';
// import Button from './components/Button/Button';

// const App = () => {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My Alert!</Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)} color="primary">
//         My Button
//       </Button>
//     </div>
//   );
// };

// export default App;
