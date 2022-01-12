class App extends React.Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
        }
    }
    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: text.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: text.toUpperCase(),
                    caps: true
                }
            })
        }
    }

    render() {
        return (
            <div className="DivOne">
                {/* <h3 onClick={() => this.changeIt(this.state.tardis.name)}>
                    {this.state.tardis.name}</h3> */}
            
                <div className="DivTwo">
                    <h3 onClick={() => this.changeIt(this.state.tardis.name)}>
                        {this.state.tardis.name}</h3>
                </div>

                <div className="DivThree">
                    <h3 onClick={() => this.changeIt(this.state.tardis.name)}>
                        {this.state.tardis.name}</h3>
                </div>
               


            </div>

        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)