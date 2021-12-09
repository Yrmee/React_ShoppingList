import React from 'react';

class InputField extends React.Component {
    state = {
        input: " "
    };

    render() {
        const onInput = (event) => {
            this.setState({
                input: event.target.value
            });
        };

        const onSubmit = (event) => {
            event.preventDefault();
            this.props.onSubmit(this.state.input);
            this.setState({
                input: " "
            })
        }

        return (
            <form onSubmit={onSubmit}>
                <input 
                    type="search" 
                    placeholder="Vul je boodschappen in" 
                    onChange={onInput} 
                    value={this.state.input}
                    className="inputField"
                />
                <button
                    type="submit"
                >
                    Toevoegen
                </button>
            </form>
        )
    }
}

export default InputField;