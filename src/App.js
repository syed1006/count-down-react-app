import React, { useEffect, useRef, useState } from 'react';
import './App.css'

const App = () => {

    const inputRef = useRef()
    const [time, setTime] = useState(null);
    const [timer, setTimer] = useState(null);

    useEffect(()=>{
        if(time === 0){
            clearInterval(timer);
        }
    }, [time])
    function handleChange(e){
        let num = parseInt(e.value);
        if(isNaN(num) || num < 0){
            setTime(0);
            return false;
        }else{
            setTime(num);
            return true;
        }
    }

    function handleKey(e){
        if(e.key === 'Enter'){
            if(handleChange(inputRef.current)){
                if(timer !== null){
                    clearInterval(timer);
                    setTimer(null);
                }
                let newTimer = setInterval(()=>{
                    setTime(oldTime => oldTime - 1)
                }, 1000)
                setTimer(newTimer);
            }
        }
    }

    return (
        <>  
            <header>
                <h1>Count Down</h1>
            </header>
            <main className="container">
                <input
                    type="number"
                    name="time"
                    id="time"
                    ref={inputRef}
                    onKeyDown={handleKey}
                />
                <div id="current-time">
                    {time!==null && time}
                </div>
            </main>
        </>
    )
}
export default App;