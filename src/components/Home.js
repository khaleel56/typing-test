import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState([]);
  const [timers, setTimers] = useState();
  const [wrong, setWrong] = useState([]);

  const navigate = useNavigate();

  let para = 'once you have finished typing this lesson, look away from the computer for a few short seconds before looking at the results.'
  let x = para.split('');
  let startTime;

  useEffect(() => {
    startTimer()
  }, [])

  function startTimer() {
    startTime = new Date();
    setInterval(() => {
      setTimers(Math.floor((new Date() - startTime) / 1000))
    }, 1000)
  }

  function words() {
    let wordsCount = text.split(" ").length;
    let wrongWords = wrong.length > 0 && wrong.split(" ").length
    let speed = Math.round((60 * (wordsCount - wrongWords)) / timers);
    return speed
  }

  const handleChange = (e) => {
    const newText = e.target.value;
    const index = newText.length - 1
    if (index == bgColor.length) {
      const caseMatch = para[index] == newText[index] ? true : false
      const color = caseMatch ? 'green' : 'red'
      setBgColor([...bgColor, color])
      if (color == 'red') {
        setWrong(wrong + newText[index])
      }
    } else {
      bgColor.pop()
      setBgColor(bgColor)
    }
    setText(newText)
    if (para.length == newText.length) {
      const speed = words()
      const accuracy = Math.round((speed / ((60 * text.split(" ").length) / timers)) * 100)
      navigate('/popup', { state: { speed: speed, accuracy: accuracy } })
    }
  }

  const onScreen = (x, i, bgColor) => {
    return <span key={i} style={{ backgroundColor: bgColor[i] }}>{x}</span>
  }

  return (
    <div className='App'>
      {x.map((x, i) => onScreen(x, i, bgColor))}<br /><br />
      <textarea placeholder='enter above text' autoFocus='true' rows={4} cols={30} maxLength={x.length} onChange={handleChange} ></textarea>
    </div>
  );
}

export default Home;
