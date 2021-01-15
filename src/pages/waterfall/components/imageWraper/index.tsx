import React, {useEffect, useState} from 'react';
import './index.less';
interface Props {
    src: string;
    width: number;
    top: number | string;
    left: number | string;
};

const COlORS = ['#CEA9A9', '#83E2AE', '#4D1E1E', '#313E86', '#E66363', '#CEA9A9', '#7C7E91', '#A9C726', '#728035', '#303612', '#767A60'];

function ImageWrapper(props: Props) {
    const {src, width, top, left} = props;
    const [color, setColor] = useState('#FFF');

    useEffect(() => {
        const romdomIndex = Math.round(Math.random() * 10);
        setColor(COlORS[romdomIndex]);
    }, []);

    return (
        <div className="image-wrapper" style={{background: color, width: width, top: top, left: left}}>
            <img src={src} alt="" />
        </div>
    );
}

export default ImageWrapper;