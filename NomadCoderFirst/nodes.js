export default class Nodes {
    constructor({ $app, startState }) {
        this.state = startState;
        this.$ul = document.createElement('ul'); // 이 안에다가 노드 데이터 삽입.
        $app.appendChild(this.$ul);
        this.setState = (newState) => {
            this.state = newState;
            this.render();
        };
        this.render = () => {
            console.log(this.state.nodes)
            console.log(this.$ul);
            this.$ul.innerHTML = this.state.nodes.map(node => `<li><img src="${node.type === "DIRECTORY" ? 'assets/Directory.png' : 'assets/Image.png'}" alt="">${node.name}</li>`).join('');
            console.log(this.state.nodes.map(node => `<li><img src="${node.type === "DIRECTORY" ? 'assets/Directory.png' : 'assets/Image.png'}" alt="">${node.name}</li>`).join(''));
        };
        this.render();
    }
}