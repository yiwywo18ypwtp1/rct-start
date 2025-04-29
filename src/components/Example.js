import { useState, useEffect, useRef } from 'react';
import Header from './Header';

function Example() {
  const [count, setCount] = useState(0);   // обычный счетчик
  const inputRef = useRef(null);           // ссылка на input


  // useEffect срабатывает после каждой перерисовки
  useEffect(() => {
    console.log('Компонент отрисован или обновился!');

    if (count === 5) {
      alert('Ты нажал 5 раз!');
    }
  }, [count]);
  // ^ зависимости: useEffect будет срабатывать ТОЛЬКО когда меняется count


  const focusInput = () => {
    inputRef.current.focus(); // обращаемся к реальному DOM-элементу через useRef
  }

  return (
    <>
      <Header />

      <div style={{ padding: '20px' }}>
        <h1>Счётчик: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Увеличить</button>

        <br /><br />

        <input ref={inputRef} placeholder="Напиши что-то..." />
        <button onClick={focusInput}>Фокус на инпут</button>
      </div>
    </>
  );
}

export default Example;