// import React, {useState, useCallback} from 'react';
import React, {useRef} from 'react';

import Child1 from './components/child1'
//  const Href = () => {
//     const [height, setHeight] = useState(0);
  
//     const measuredRef = useCallback(node => {
//       if (node !== null) {
//         setHeight(node.getBoundingClientRect().height);
//       }
//     }, []);
  
//     return (
//       <>
//         <h1 ref={measuredRef}>Hello, world</h1>
//         <h2>The above header is {Math.round(height)}px tall</h2>
//       </>
//     );
//   }

const Href = () => {
    const Child1Ref = useRef(null);
    const onButtonClick = () => {
      // `current` 指向已挂载到 DOM 上的文本输入元素
      console.log(Child1Ref);
      Child1Ref.current.onButtonClick();
    };
    return (
      <>
        <Child1 ref={Child1Ref} />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
};


  export default Href;