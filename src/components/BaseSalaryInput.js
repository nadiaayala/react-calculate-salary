
import React, { Component } from 'react';

export default class extends Component {


    handleInputChange = (event) => {
        let salary = event.target.value;
        salary = parseFloat(salary).toFixed(2);
        typeof salary === NaN ? this.props.onChange(0) : this.props.onChange(salary);
        // this.setState({
        //     baseSalary: salary
        // });

        

        // this.calculateINSSDiscount();
    }

    // componentDidUpdate(e) {
    //     console.log(e.target);
        
    // }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="base-salary" type="number" className="validate" onChange={this.handleInputChange}/>
                        <label className="active" >Full salary</label>
                    </div>
                </div>

                

                    
                        
                        
                        {/* <div className="input-field col s3">
                            <input id="last_name" type="text" className="validate" disabled />
                            <label className="active" >Base IRPF</label>
                        </div> */}
                        {/* <div className="input-field col s3">
                            <input id="last_name" type="text" className="validate" disabled />
                            <label className="active">Desconto IRPF</label>
                        </div> */}
                    {/* </div>
                </div> */}
            </div>


        );
    }
}

