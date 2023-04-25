import React from 'react';
import Alert from './components/Alert';

const App = () => {
  return (
    <div>
      <Alert>My Alert!</Alert>
    </div>
  );
};

export default App;

// import ListGroup from './components/ListGroup/ListGroup';

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
//       />    2
//     </div>
//   );
// };

// export default App;
