import React, { Component } from 'react';
import css from './readOnlyInput.module.css';

export default class ReadOnlyInput extends Component {
    render() { 
        const {val, percentage, title, id} = this.props;
        const perc = percentage * 100;
        const formatedVal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
        const classes = id === 'discINSS' ? ` ${css.result}  orange-text darken-3` : (id === 'discIRPF' ? `${css.result}  red-text darken-3` : `${css.result} teal-text lighten-2`);
        return ( 
            <div className="input-field col s3">
                <input type="text" className={classes} readOnly value={`${formatedVal} (${perc}%)`}/>
                <label className="active" > {title} </label>
            </div>
         );
    }
}
 
 