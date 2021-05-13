import Nodes from './nodes.js'
import { request } from './api.js'

export default function App($app) {
    this.state = {
        isRoot: true,
        nodes: [],
        depth: []
    }
    const nodes = new Nodes({
        $app,
        startState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        }
    })
    this.setState = (newState) => {
        this.state = newState
        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        })
    }
    const init = async () => {
        console.log('init');
        const rootNodes = await request();
        this.setState({
            ...this.state,
            isRoot: true,
            nodes: rootNodes
        })
    }
    init()
}
