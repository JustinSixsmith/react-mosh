// import { useState } from 'react';
// import Alert from './components/Alert';
// import Button from './components/Button';

// const App = () => {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My Alert!</Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)} color="warning">
//         My Button
//       </Button>
//     </div>
//   );
// };

// export default App;

import ListGroup from './components/ListGroup/ListGroup';

const App = () => {
  let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
