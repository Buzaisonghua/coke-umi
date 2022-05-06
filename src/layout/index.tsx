import React from 'react';
export default class Layout extends  React.Component {
    async componentWillMount() {
        console.log(1)
        await this.test()
        console.log(2)
    }
    render() {
        console.log(3)
        return <div>2</div>
    }
    test() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('1')
            }, 1000)
        })
    }
}