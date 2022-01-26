import React, { useState, useEffect } from 'react';
import '../../index.css';
import style from '../../styles.module.css';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


export const Messanger = () => {

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');

  const myRef = React.createRef();

  useEffect(() => {
    myRef.current?.focus();
  }, [myRef]);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage.author !== "Bot:") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot:", message: "Message recived!", style: 'botStyle' },
        ]);
      }, 1500);
    }

    return () => clearInterval(timerId);
  }, [messageList]);

  const Clock = () => {
    const [time, setTime] = useState(new Date());

    const refreshClock = () => {
      setTime(new Date());
    }
    useEffect(() => {
      const timer = setInterval(refreshClock, 1000);
      return () => clearInterval(timer);
    }, [time]);

    return (
      <span className={style.clock}>
        Current Time is {time.toLocaleTimeString('Ru-ru')}
      </span>
    );
  }

  const sendMsg = () => {
    if (message) {
      setMessageList([...messageList, { author: 'User:', message: message }]);
      setMessage('');
    }
  };

  const handlePressInput = (event) => {
    if (event.code === "Enter") {
      sendMsg();
    }
  };

  return (

    <main className={style.main_center}>
      <div className={style.msgField}>
        {messageList.map((msg, index) => (
          <div className={`${style.msg_container} ${msg.style}`} key={index}>
            <h5>{msg.author}&nbsp;</h5>
            <p>{msg.message}</p>
          </div>))}
      </div>

      <div className={style.inputForm}>
        <input ref={myRef} value={message} onKeyPress={handlePressInput} onChange={(event) => setMessage(event.target.value)} className={style.textInput} />
        <div className={style.inputForm_btnBox}>
          <Clock />
          <Button variant="contained" endIcon={<SendIcon />} onClick={sendMsg}>
            Send
          </Button>
        </div>
      </div>
    </main>
  );
}