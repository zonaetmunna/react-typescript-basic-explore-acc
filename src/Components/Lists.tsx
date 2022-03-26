import React from 'react';
import List from './List';

const Lists = () => {
     const items: string = ['munna', 'asha'];
     const onClick = (text: string): void => alert(text);
     return (
          <div>
               <List items={items} onClick={onclick}></List>
          </div>
     );
};

export default Lists;