import React, { Component } from 'react';
import css from './readOnlyInput.module.css';


export default class ReadOnlyInput extends Component {
    render() { 
        const {val, title, id} = this.props;
        const formatedVal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
        const classes = id === 'liquido' ? `${css.result} teal-text lighten-2`  : `${css.result}`
        return ( 
            <div className="input-field col s3">
                <input id="first_name" type="text" className={classes} readOnly value={formatedVal}/>
                <label className="active" > {title} </label>
            </div>
         );
    }
}
 
 