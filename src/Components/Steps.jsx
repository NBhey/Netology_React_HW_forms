import React, { useRef, useState } from "react";

const Steps = () => {
  const dateInput = useRef();
  const walkInput = useRef();
  // localStorage.setItem("list", JSON.stringify([]));
  // console.log(localStorage.getItem('list'))
  let [dataForSave, setDataForSave] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Начало",dataForSave)

    const currentDate = dateInput.current.value.split("-").reverse().join(".");
    const currentWalk = +walkInput.current.value;
    let saveNewData;

    const existingDate = dataForSave.findIndex(
      (element) => element.currentDate === currentDate
    );
    
    if(existingDate === -1){
      saveNewData = [...dataForSave, {currentDate, currentWalk}]
      setDataForSave(saveNewData)
    } else {

      saveNewData = dataForSave.map((el)=>{
        if(el.currentDate === currentDate){
          el.currentWalk += currentWalk
        } return el
      })
      setDataForSave(saveNewData)
    }
    console.log("Конец",dataForSave )
  };

  return (
    <>
      <form onSubmit={onSubmit} className="Steps-form" action="">
        <p className="Steps-form__date"> Дата(ДД.ММ.ГГ)</p>
        <p className="Steps-form__walk">Пройдено км</p>
        <input ref={dateInput} type="date" required />
        <input
          ref={walkInput}
          placeholder="только числа"
          type="text"
          pattern="[0-9]+(\.[0-9]+)?"
          required
        />
        <button> ОК </button>
      </form>

      <table>
        <thead>
          <tr>
            <th> Дата (ДД.ММ.ГГ) </th>
            <th> Пройдено км </th>
            <th> Действия </th>
          </tr>
        </thead>
        <tbody>
          {dataForSave.map((el, i) => {
            return <StepsTable key={i} dataForSave={el} />;
          })}
        </tbody>
      </table>
    </>
  );
};

const StepsTable = ({ dataForSave }) => {
  console.log('я StepsTable', dataForSave)
  return (
    <tr>
      <th> {dataForSave.currentDate} </th>
      <th> {dataForSave.currentWalk} </th>
      <th>
        <span>ред</span> <button>x</button>
      </th>
    </tr>
  );
};

export default Steps;
