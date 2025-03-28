import React, { useRef, useState } from "react";

const Steps = () => {
  const dateInput = useRef();
  const walkInput = useRef();

  let [dataForSave, setDataForSave] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const currentDate = dateInput.current.value.split("-").reverse().join(".");
    const currentWalk = +walkInput.current.value;

    let saveNewData;

    const existingDate = dataForSave.findIndex(
      (element) => element.currentDate === currentDate
    );

    if (existingDate === -1) {
      saveNewData = [...dataForSave, { currentDate, currentWalk }];

      saveNewData.sort((a, b) => {
        const parseDate = (dateStr) => {
          const [day, month, year] = dateStr.split(".").map(Number);
          return new Date(year, month - 1, day).getTime();
        };

        const timestampA = parseDate(a.currentDate);
        const timestampB = parseDate(b.currentDate);

        return timestampB - timestampA;
      });

      setDataForSave(saveNewData);
    } else {
      saveNewData = dataForSave.map((el) => {
        if (el.currentDate === currentDate) {
          el.currentWalk += currentWalk;
        }
        return el;
      });
      setDataForSave(saveNewData);
    }
  };

  const handleDelete = (dateToDelete) => {
    setDataForSave(
      dataForSave.filter((item) => item.currentDate !== dateToDelete)
    );
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
            return (
              <StepsTable key={i} dataForSave={el} onDelete={handleDelete} />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const StepsTable = ({ dataForSave, onDelete }) => {
  return (
    <tr>
      <td>{dataForSave.currentDate}</td>
      <td>{dataForSave.currentWalk}</td>
      <td>
        <span>ред</span>
        <button onClick={() => onDelete(dataForSave.currentDate)}>x</button>
      </td>
    </tr>
  );
};

export default Steps;
