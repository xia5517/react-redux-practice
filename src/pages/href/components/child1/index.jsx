// import React, {useState, useCallback} from 'react';
import React, {useRef, useImperativeHandle, forwardRef} from 'react';

const Child1 = (props, ref) => {
    const inputEl = useRef(null);
   

    useImperativeHandle(ref, () => ({
        onButtonClick: () => {
            // `current` 指向已挂载到 DOM 上的文本输入元素
            inputEl.current.focus();
        }
    }))

    return (
      <>
        <input ref={inputEl} type="text" />
      </>
    );
};


  export default forwardRef(Child1);