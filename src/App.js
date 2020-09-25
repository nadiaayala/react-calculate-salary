import React, { Component } from 'react';
import './App.css';
import BaseSalaryInput from './components/BaseSalaryInput';
import ReadOnlyInput from './components/ReadOnlyInput';
import ReadOnlyInputDiscount from './components/ReadOnlyInputDiscount';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      baseSalary: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      percDiscountINSS: 0,
      percDiscountIRPF: 0,
      netSalary: 0,
      netSalaryPerc:0
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     baseSalary: 0,
  //     discountINSS: 0,
  //     baseIRPF: 0,
  //     discountIRPF: 0,
  //   });
  // }

  componentDidUpdate() {

  }

  calculateINSSDiscount() {
    let { baseSalary, discountINSS } = this.state;
    console.log(baseSalary);
    let percentage = 0;
    let discount = 0;
    baseSalary = parseFloat(baseSalary);
    console.log(baseSalary);
    if (baseSalary <= 1045.00) {
      percentage = 0.075;
    }
    else if (baseSalary <= 2089.60) {
      percentage = 0.09;
    }
    else if (baseSalary <= 3134.40) {
      percentage = 0.12;
    }
    else if (baseSalary <= 6101.06) {
      percentage = 0.14;
    }

    discount = baseSalary * percentage;

    if (this.state.discountINSS != discount) {
      this.setState({
        discountINSS: discount,
        percDiscountINSS: percentage
      });
    }


    console.log(`The inss discount will be ${this.state.discountINSS}`);
  }

  async calculateIRPFDiscount() {
    let { baseSalary, discountINSS } = this.state;
    let baseIRPF = parseFloat(baseSalary) - discountINSS;
    let percentage = 0;
    let discountIRPF = 0;
    if (baseIRPF <= 1903.98) {
      percentage = 0;
      discountIRPF = 0;
    }
    else {
      if (baseIRPF <= 2826.65) {
        percentage = 0.075;
      }
      else if (baseIRPF <= 3751.06) {
        percentage = 0.15;
      }
      else if (baseIRPF <= 4664.68) {
        percentage = 0.225;
      }
      else if (baseIRPF > 4664.68) {
        percentage = 0.275;
      }

    }
    discountIRPF = baseIRPF * percentage;

    await this.setState({
      baseIRPF,
      discountIRPF,
      percDiscountIRPF: percentage,
    });

    console.log(`The IRPF base will be ${this.state.baseIRPF} and the IRPF discount will be ${this.state.discountIRPF}`);
  }


  handleInputChange = async (salary) => {
    console.log(salary);
    await this.setState({
      baseSalary: parseFloat(salary),
    });
    this.calculateINSSDiscount();
    this.calculateIRPFDiscount();
  };


  render() {
    const { baseSalary } = this.state;
    return (
      <div className="App">
        <BaseSalaryInput onChange={this.handleInputChange} />
        <div className="row">
          <div className="row">
            <ReadOnlyInput val={this.state.baseSalary} title='Base INSS:' />
            <ReadOnlyInputDiscount val={this.state.discountINSS} percentage={this.state.percDiscountINSS} title='Desconto INSS:' id='discINSS'/>
            <ReadOnlyInput val={this.state.baseIRPF} title='Base IRPF:' />
            <ReadOnlyInputDiscount val={this.state.discountIRPF} percentage={this.state.percDiscountIRPF} title='Desconto IRPF:' id='discIRPF'/>
          </div>
          <div> 
          <ReadOnlyInputDiscount val={this.state.netSalary} percentage={this.state.netSalaryPerc} title='Salário líquido:'/>
          </div>
        </div>

      </div>
    );
  }

}


