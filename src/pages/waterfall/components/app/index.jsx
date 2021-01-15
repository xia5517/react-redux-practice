import {PureComponent} from 'react';
import {Spin} from 'antd';
import ImageWraper from '../imageWraper';

import './index.less';

function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}

const WIDTH = 200;

function getCols() {
    return Math.floor(getClient().width / WIDTH);
}

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cacheList: []
        };
        this.cols = getCols();
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(props) {
        const {list} = props.data;
        list && this.updateList();
    }

    getData() {
        this.props.actions.getImages(1);
    }

    updateList() {
        const data = this.props.data.list;
        const list = [];
        for (let i = 0; i < this.cols; i++) {
            list[i] = undefined;
        }

        this.setState({
            cacheList: list
        }, () => {
            this.pushList(data);
        })
    }


    pushList(data) {
        const cacheList = this.state.cacheList;
        data && data.map((item, index) => {
            const pos = index % this.cols;
            const {width, height} = JSON.parse(item.img_attr)
            item.height = Math.ceil(WIDTH * height / width) + 8; 
            if (!cacheList[pos]) {
                cacheList[pos] = item.height;
                item.top = 0;
                item.left = (WIDTH + 8) * pos;
            }
            else {
                let min = Math.min(...cacheList)
                const minIdx = cacheList.indexOf(min);
                item.left = (WIDTH + 8) * minIdx;
                item.top = cacheList[minIdx] + 8;
                cacheList[minIdx] += item.height + 8;
            }
            return item;
        })

        this.setState({
            imgList: data
        });
    }

    render() {
        const {imgList} = this.state;
        console.log(imgList)
        const {loading, list} = this.props.data;
        return (
            <div className="_namespace self">
                {imgList && imgList.map((item, index) => <ImageWraper key={item.src + index} width={WIDTH} {...item} />)}
                {loading && <div className="loading-wrapper"><Spin size="large" /></div>}
            </div>
        );
    }
}

export default index;