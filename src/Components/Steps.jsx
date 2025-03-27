import React, { useRef, useState } from "react";

const Steps = () => {
  const dateInput = useRef();
  const walkInput = useRef();
  // localStorage.setItem("list", JSON.stringify([]));
  // console.log(localStorage.getItem('list'))
  const [dataForSave, setDataForSave] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const currentDate = dateInput.current.value.split("-").reverse().join(".");
    const currentWalk = +walkInput.current.value


    const existingDate = dataForSave.findIndex((element) => element.dateInput === currentDate)

    console.log("12 строчка", existingDate);
    if (!existingDate) {
      console.log('20строчка попал в если')
      
      const updatedData = [dataForSave];
      console.log('23 строчка попал в если', updatedData)
      setDataForSave([
        ...dataForSave,
        {
          walkInput: +walkInput.current.value,
        },
      ]);
    } else {
      console.log('28 строчка попал в else')
      setDataForSave([
        ...dataForSave,
        {
          dateInput: currentDate,
          walkInput: currentWalk,
        },
      ]);
    }

    console.log("18 строчка", dataForSave);
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
  console.log(dataForSave);
  return (
    <tr>
      <th> {dataForSave.dateInput} </th>
      <th> {dataForSave.walkInput} </th>
      <th>
        <span>ред</span> <button>x</button>
      </th>
    </tr>
  );
};

export default Steps;
