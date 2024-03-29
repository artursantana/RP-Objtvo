import React, { useState } from 'react';
import * as S from './style';

const Calendar: React.FC = () => {
  const [valorMegas, setValorMegas] = useState('');
  const [valorFeito, setValorFeito] = useState('');
  const [diasTrabalho, setDiasTrabalho] = useState('');
  const [showResults,setShowResults] = useState(0)
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const MesAtualForPrint = meses[currentDate.getMonth()];


  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

const DayNumber = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();



  const handleDateClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const index = selectedDates.findIndex(selectedDate => selectedDate.getTime() === date.getTime());

    

    if (index !== -1) {
      const updatedDates = [...selectedDates];
      updatedDates.splice(index, 1);
      setSelectedDates(updatedDates);
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const renderCalendar = () => {
    const days = [];
    const nowtoday = new Date().getDate();
    const today = new Date(currentYear, currentMonth, nowtoday);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const currentDate = new Date(currentYear, currentMonth, i);
      const isSelected = selectedDates.some(selectedDate => {
        const selectedDay = new Date(selectedDate).getDate();
        return selectedDay === i;
      });
      
     
      if (currentDate < today) {
        days.push(
          <div
            key={i}
            className="day disabled"
          >
            {i}
          </div>
        );
      } else {
        days.push(
          <div
            key={i}
            className={`day ${isSelected ? 'selected' : ''}`}
            onClick={() => handleDateClick(i)}
          >
            {i}
          </div>
        );
      }
    }
    return days;
  };

  
/*

  const printSelectedDates = () => {
    console.log("Dias marcados:");
    selectedDates.forEach(date => {
      console.log(date.getDate());
      console.log(selectedDates.length)
    });
  };
  
  */

  const handleChangeValorMegas = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorMegas(event.target.value);
  };

  const handleChangeValorFeito = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorFeito(event.target.value);
  };

  const handleChangeDiasTrabalho = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiasTrabalho(event.target.value);
  };

  const handleSomarInputs = () => {
    const megas = parseInt(valorMegas);
    const feito = parseInt(valorFeito);
    const diasTrabalhoInt = parseInt(diasTrabalho);
    if (!isNaN(megas) && !isNaN(feito)) {

      if(showResults === 0 || ''){
        const resultado = (megas - feito) / diasTrabalhoInt;
        setShowResults(resultado)
      }
      if(showResults !== 0){
        const resultado = (megas - feito) / valueRealForDivision;
        setShowResults(resultado)
      }
      
    }
  };
  const nowtoday = new Date().getDate()-1;
  const valueRealForDivision = (DayNumber-nowtoday) - selectedDates.length

  return (
    <S.Container>
        <h2>{MesAtualForPrint}</h2>

      <div className="calendar-container">
        <div className="calendar">
          {renderCalendar()}
        </div>
      </div>

      <div>
        <input
          type="number"
          placeholder='objetivo de megas'
          value={valorMegas}
          onChange={handleChangeValorMegas}
        />- 
        <input
          type="number"
          placeholder='objetivo já feito'
          value={valorFeito}
          onChange={handleChangeValorFeito}
        /> / {selectedDates.length === 0 || '' ? <input type='number' value={diasTrabalho} placeholder='dias trabalho' onChange={handleChangeDiasTrabalho}/> : valueRealForDivision} <button onClick={handleSomarInputs}>Validar</button>
      </div>
      {
            showResults !== 0 || '' ? <h1>{showResults}</h1> : <h1>Por favor, insira números válidos.</h1>
      }
    </S.Container>
  );
};

export default Calendar;
