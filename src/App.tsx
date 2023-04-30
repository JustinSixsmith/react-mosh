import axios, { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete('https://jsonplaceholder.typicode.com/users/' + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];

    const newUser = {
      id: 0,
      name: 'Mosh',
    };
    setUsers([newUser, ...users]);

    axios
      .post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

// import React, { useState } from 'react';
// import ProductList from './components/ProductList';

// const App = () => {
//   const [category, setCategory] = useState('');

//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category} />
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useRef } from 'react';

// const App = () => {
//   const ref = useRef<HTMLInputElement>(null);

//   // afterRender
//   useEffect(() => {
//     // Side effect
//     if (ref.current) ref.current.focus();
//   });

//   useEffect(() => {
//     document.title = 'My App';
//   });

//   return (
//     <div>
//       <input ref={ref} type="text" className="form-control" />
//     </div>
//   );
// };

// export default App;

// ---------------------------------------------------------------------------

// import React, { useState } from 'react';
// import ExpenseList from './expense-tracker/components/ExpenseList';
// import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
// import ExpenseForm from './expense-tracker/components/ExpenseForm';
// import categories from './expense-tracker/categories';

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [expenses, setExpenses] = useState([
//     {
//       id: 1,
//       description: 'aaa',
//       amount: 10,
//       category: 'Utilities',
//     },
//     {
//       id: 2,
//       description: 'bbb',
//       amount: 10,
//       category: 'Utilities',
//     },
//     {
//       id: 3,
//       description: 'ccc',
//       amount: 10,
//       category: 'Utilities',
//     },
//     {
//       id: 4,
//       description: 'ddd',
//       amount: 10,
//       category: 'Utilities',
//     },
//   ]);

//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <div>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(expense) =>
//             setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       ></ExpenseList>
//     </div>
//   );
// };

// export default App;

// ---------------------------------------------------------------------------

// import Form from './components/Form';

// const App = () => {
//   return (
//     <div>
//       <Form></Form>
//     </div>
//   );
// };

// export default App;

// import ExpandableText from './components/ExpandableText';

// const App = () => {
//   return (
//     <div>
//       <ExpandableText maxChars={100}>Hello World</ExpandableText>
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';

// const App = () => {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       {
//         id: 1,
//         title: 'Product1',
//         quantity: 1,
//       },
//       {
//         id: 2,
//         title: 'Product2',
//         quantity: 1,
//       },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };

//   return (
//     <div>
//       <br />
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default App;

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
