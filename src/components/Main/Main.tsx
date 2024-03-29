import React, { useState } from 'react';
import * as S from './style';

const Calendar: React.FC = () => {
  const [valorMegas, setValorMegas] = useState('');
  const [valorFeito, setValorFeito] = useState('');
  const [showResults,setShowResults] = useState(0)
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

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
    for (let i = 1; i <= daysInMonth(currentMonth, currentYear); i++) {
      const isSelected = selectedDates.some(selectedDate => {
        const selectedDay = new Date(selectedDate).getDate();
        return selectedDay === i;
        
      });
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
    return days;
  };

  

  const printSelectedDates = () => {
    console.log("Dias marcados:");
    selectedDates.forEach(date => {
      console.log(date.getDate());
      console.log(selectedDates.length)
    });
  };

  const handleChangeValorMegas = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorMegas(event.target.value);
  };

  const handleChangeValorFeito = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorFeito(event.target.value);
  };


  const handleSomarInputs = () => {
    const megas = parseInt(valorMegas);
    const feito = parseInt(valorFeito);
    if (!isNaN(megas) && !isNaN(feito)) {
      const resultado = (megas - feito) / (DayNumber - selectedDates.length);
      setShowResults(resultado)
    } else {
      console.log('Por favor, insira números válidos nos dois campos.');
    }
  };


  return (
    <S.Container>
        <h2>{currentDate.toLocaleString('default', { month: 'long' })}</h2>
      <div className="calendar-container">
        <div className="calendar">
          {renderCalendar()}
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder='objetivo de megas'
          value={valorMegas}
          onChange={handleChangeValorMegas}
        />- 
        <input
          type="text"
          placeholder='objetivo já feito'
          value={valorFeito}
          onChange={handleChangeValorFeito}
        /> / {DayNumber - selectedDates.length} <button onClick={handleSomarInputs}>Validar</button>
      </div>
      {
            showResults !== 0 && <h1>{showResults}</h1>
      }
    </S.Container>
  );
};

export default Calendar;
