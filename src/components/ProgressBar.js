import React, { Component } from 'react';
import css from './progressbar.module.css';


export default class ProgressBar extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    componentDidUpdate(){
        console.log(this.props);
    }
    render() {
        const {discINSS, discIRPF, netSalary} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className={css.container}>
                            <div className={css.discINSS} style={{width: discINSS + '%'}}> </div>
                            <div className={css.discIRPF} style={{width: discIRPF + '%'}}> </div>
                            <div className={css.netSalary} style={{width: netSalary + '%'}}> </div>
                        </div>
                    </div>
                </div>
                </div>
);
           }
       }
        
