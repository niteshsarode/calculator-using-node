import React from 'react'


const CreateOperation = ({submitted, operations, onChangeForm, calculateOperation }) => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-10 mrgnbtm">
                <h2>Let's do some operations!!</h2>
                <form className="formClass">
                    <div className="row">
                        <div className="form-group col-md-4">
                            { !operations.firstNumber && submitted &&
                                <label>First number is requried!</label>
                            }
                            {  (!submitted || operations.firstNumber) &&
                                <label>First number</label>
                            }
                            <input type="number" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstnumber" id="firstnumber" placeholder="Enter first number" />
                        </div>
                        <div className="form-group col-md-2">
                            { !operations.operator && submitted &&
                                <label>Operator is requried!</label>
                            }
                            { (!submitted || operations.operator) &&
                                <label>Operator</label>
                            }
                            <select id="operator" name="operator" onChange={(e) => onChangeForm(e)} className="form-control">
                                <option value="select" defaultValue>Select</option>
                                <option value="+">+</option>
                                <option value="-">-</option>
                                <option value="/">/</option>
                                <option value="*">*</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            { !operations.secondNumber && submitted &&
                                <label>Second number is requried!</label>
                            }
                            {  (!submitted || operations.secondNumber) &&
                                <label>Second number</label>
                            }
                            <input type="number" onChange={(e) => onChangeForm(e)} className="form-control" name="secondnumber" id="secondnumber" placeholder="Enter second number" />
                        </div>
                        <div className="form-group col-md-2">
                            <button type="button" onClick= {(e) => calculateOperation()} className="btn btn-success calcBtn">Calculate</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateOperation;