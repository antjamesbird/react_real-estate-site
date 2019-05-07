import React, { Component } from 'react';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Footer from '../../components/footer/footer';
import './calculator.scss';

class CalculatorView extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  retrunvoid(e) {
    e.preventDefault();
  }

  handleClick(e) {

    this.props.showCalcResults(false);

    const Income = Number(this.inIncome.value);
    const Deductions = Number(this.inDeductions.value);
    const Expenses = Number(this.inExpenses.value);
    const Intrate = Number(this.inRate.value);
    const Term = Number(this.inTerm.value);

    const MonRepay = Number(this.inPrevPay.value);
    const GrossTot = this.inGross;
    const NettTot = this.inNett;
    const RepayTot = this.inRepay;

    const J = Intrate / (12 * 100);
    const N = Term * 12;
    const M = (J / (1 - Math.pow((1 + J), -N)));

    const TotG = (Income * 30 / 100) / M;
    const TotN = ((Income - Deductions - Expenses) * 75 / 100) / M;
    const TotR = MonRepay / M;

    GrossTot.value = `R ${this.addCommas(TotG.toFixed(2))}`;
    NettTot.value = `R ${this.addCommas(TotN.toFixed(2))}`;
    RepayTot.value = `R ${this.addCommas(TotR.toFixed(2))}`;

    this.props.showCalcResults(true);
  }

  addCommas(nStr) {
    nStr += '';
    const x = nStr.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? '.' + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1,$2');
    }
    return x1 + x2;
  }

  handleReset(e) {
    e.preventDefault();
    this.bondCalc.reset();
    this.props.showCalcResults(false);
  }

  render() {
    return (
      <div>
        <Header />
        <Search updateSearchResults={this.props.updateSearchResults} classList="search-component no-carousel" />
        <main className="main" role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Bond/Homeloan Calculators</h1>
                <p>Find out how much you qualify for based on affordability and how much you can loan with your preferred monthly repayment.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <form ref={(input) => this.bondCalc = input} className="form-horizontal" role="form">
                  <div className="form-group">
                    <label className="control-label" htmlFor="inIncome">Income (before tax and other deductions):</label>
                    <div>
                      <input ref={(input) => this.inIncome = input} className="form-control" id="inIncome" placeholder="Enter Gross Income" type="number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="inDeductions">Monthly Deductions:</label>
                    <div> 
                      <input ref={(input) => this.inDeductions = input} className="form-control" id="inDeductions" placeholder="Enter Monthly Deductions" type="number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="inExpenses">Total Monthly Expenses:</label>
                    <div>  
                      <input ref={(input) => this.inExpenses = input} className="form-control" id="inExpenses" placeholder="Enter monthly expenses" type="number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="inTerm">Loan Term (years):</label>
                    <div> 
                      <input ref={(input) => this.inTerm = input} className="form-control" id="inTerm" placeholder="Enter Nett Income" onChange={(e) => this.retrunvoid(e)} defaultValue="20" type="number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="inRate">Interest Rate (%):</label>
                    <div> 
                      <input ref={(input) => this.inRate = input} name="inRate" id="inRate" className="form-control" placeholder="Enter Interest rate" onChange={(e) => this.retrunvoid(e)} defaultValue="10.5" type="number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="inPrevPay">Preferred Monthly Repayments:</label>
                    <div> 
                      <input ref={(input) => this.inPrevPay = input} className="form-control" id="inPrevPay" placeholder="Enter Preferred Monthly Repayments" type="number" />
                    </div>
                  </div>
                  <div className="form-group"> 
                    <div className="col-sm-offset-5">
                      <button type="button" className="btn btn-default" onClick={(e) => this.handleClick(e)}>Submit</button>
                      <button type="button" className="btn btn-default" onClick={(e) => this.handleReset(e)}>Reset Form</button>
                    </div>
                  </div>
                  <div className={this.props.showHiddenResults ? 'showHidden' : 'hiddenReults'}>
                    <div className="form-group">
                      <label className="control-label" htmlFor="inGross" id="lblGrossMsg">Amount you qualify for based on 30% Gross Income:</label>
                      <div> 
                        <input ref={(input) => this.inGross = input} className="form-control" id="inGross" disabled="disabled" type="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label" htmlFor="inNett" id="lblNettMsg">Amount you qualify for based on 85% of Available Income:</label>
                      <div> 
                        <input ref={(input) => this.inNett = input} className="form-control" id="inNett" disabled="disabled" type="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label" htmlFor="inRepay" id="lblRepayMsg">Amount you qualify for based on your Preferred Monthly Repayments:</label>
                      <div> 
                        <input ref={(input) => this.inRepay = input} className="form-control" id="inRepay" disabled="disabled" type="text" />
                      </div>
                    </div>
                  </div>
                </form>
                <h4>DEFINITIONS</h4>
                <h5>Loan Term</h5>
                <p>This is the number of years you would like to pay on your loan. Currently the banks offer a maximum term of 20 to 30 years.
                </p>
                <h5>Interest Rate</h5>
                <p>Please note that the current Prime interest rate is used by default. This is not always the actual rate granted by the bank.
                </p>
                <h5>Disclaimer</h5>
                <p>While every effort has been made to ensure the accuracy of all calculators, no responsibility can be accepted for errors or omissions however caused. No responsibility for any loss occasioned to any person acting or refraining from action as result of material in this programme is accepted by Multinet Mortgages.
                </p>
              </div>
              <div className="col-sm-12 col-md-4">
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default CalculatorView;
