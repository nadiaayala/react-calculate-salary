
import React, { Component } from 'react';

export default class extends Component {
    handleInputChange = (event) => {
        let salary = event.target.value;
        salary = parseFloat(salary).toFixed(2);
        typeof salary === NaN ? this.props.onChange(0) : this.props.onChange(salary);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="base-salary" type="number" className="validate" onChange={this.handleInputChange} />
                        <label className="active" >Full salary</label>
                    </div>
                </div>
            </div>
        );
    }
}

