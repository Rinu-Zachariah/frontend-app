import React, { useState, useEffect } from 'react';

const Budget = () => {
  const dataArr = ["SEA", "Display", "Social", "Affiliate", "Remarketing"];
  const initialstate = [
    { type: "SEA", currency : "", keepConsistent: "", exclude: "" },
    { type: "Display", currency : "", keepConsistent: "", exclude: "" },
    { type: "Social", currency : "", keepConsistent: "", exclude: "" },
    { type: "Affiliate", currency : "", keepConsistent: "", exclude: "" },
    { type: "Remarketing", currency : "", keepConsistent: "", exclude: "" }
  ];
  const [objInput, setObjInput] = useState([...initialstate]);
  const [total, setTotal] = useState(0);
  const [checkWithExclude, setCheckWithExclude] = useState(false);
  
  const updateDetails = (value, arr) => {
    const updateState = [...objInput];
    updateState.find(inputObj => inputObj.type === arr).currency = value
    setObjInput(updateState)
  }
  const updateRadio = (arr, texttype) => {
    const updateState = [...objInput];
    if (texttype === "keepConsistent") {
      updateState.find(inputObj => inputObj.type === arr).exclude = false;
    } else {
      updateState.find(inputObj => inputObj.type === arr).keepConsistent = false;
    }
    updateState.find(inputObj => inputObj.type === arr)[texttype] = true;
    setObjInput(updateState)
  }
  useEffect(() => {
    let updateState = [...objInput];
    if (checkWithExclude) {
      updateState = updateState.filter(arr => arr.exclude !== true)
    }
    const sum = updateState.reduce((a, b) => ({currency: Number(a.currency) + Number(b.currency)}));
    setTotal(sum.currency)
  }, [objInput, checkWithExclude])
 
  return (
    <>
      <div className="budget-container-content">
        <div className="budget-container-column">
          <div className="media-plan-container-label">Channel</div>
        </div>
        <div className="budget-container-column">
          <div className="media-plan-container-label">Budget</div>
        </div>
        <div className="budget-container-column-radio">
          <div className="media-plan-container-label">Keep Consistent</div>
        </div>
        <div className="budget-container-column-radio">
          <div className="media-plan-container-label">Exclude</div>
        </div>
      </div>
      {dataArr && dataArr.map(arr => (
        <div className="budget-container-content">
          <div className="budget-container-column">
            {arr}
          </div>
          <div className="budget-container-column">
            <input
              type="number"
              name="budget"
              className="budget-container-input"
              value={
                objInput.find(inputObj => inputObj.type === arr).currency
              }
              onChange={e => updateDetails(e.target.value, arr)}
            />
          </div>
          <div className="budget-container-column-radio">
            <input
              type="radio"
              id={`${arr}1`}
              name={`${arr}name`}
              value={
                objInput.find(inputObj => inputObj.type === arr).keepConsistent
              }
              onChange={e => updateRadio(arr, "keepConsistent")}
            />
            <label for={`${arr}1`}></label>
          </div>
          <div className="budget-container-column-radio">
            <input
              type="radio"
              id={`${arr}2`}
              name={`${arr}name`}
              value={
                objInput.find(inputObj => inputObj.type === arr).exclude
              }
              onChange={e => updateRadio(arr, "exclude")}
            />
            <label for={`${arr}2`}></label>
          </div>
        </div>
      ))}
      <div className="budget-container-content">
        <div className="budget-container-amount">Total Amount</div>
        <input
          type="number"
          name="budget"
          className="budget-container-input budget-container-amount-input"
          value={total}
          readOnly
        />
        <div className="budget-container-exclude">
          <input
            type="checkbox"
            id="exclude" name="excludeName"
            value={checkWithExclude}
            onClick={() => setCheckWithExclude(!checkWithExclude)}
          />
          <label for="excludeName">Amount with "Exclude" values</label>
        </div>
      </div>
    </>
  );
};

export default Budget;
