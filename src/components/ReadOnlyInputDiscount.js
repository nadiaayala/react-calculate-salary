import React, { Component } from 'react';
import css from './readOnlyInput.module.css';

export default class ReadOnlyInput extends Component {
    render() {
        const { val, percentage, title, id } = this.props;
        //Set percentage as text to show it to the user
        let perc = parseFloat(percentage * 100).toFixed(2);
        //Set values to local currency
        const formatedVal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
        //Set text colors according to their category
        const classes = id === 'discINSS' ? ` ${css.result}  orange-text darken-3` : (id === 'discIRPF' ? `${css.result}  red-text darken-3` : `${css.result} teal-text lighten-2`);
        return (
            <div className="input-field col s3">
                <input type="text" className={classes} readOnly value={`${formatedVal} (${perc}%)`} />
                <label className="active" > {title} </label>
            </div>
        );
    }
}

