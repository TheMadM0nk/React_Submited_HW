import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../../index.css';
import { Clock } from './clock';
import style from '../../styles.module.css';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";

export const Messanger = () => {

  const [messageList, setMessageList] = useState({});
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const myRef = useRef(null);


  const sendMsg = useCallback(
    (message, author = chatId, style = 'msg_container') => {
      if (message) {
        setMessageList((state) => ({
          ...state,
          [chatId]: [...(state[chatId] ?? []),
          { author, message, date: new Date(), style }],
        }));
        setValue('');
      }
    }, [chatId]);

  const handlePressInput = (e) => {
    if (e.code === "Enter") {
      sendMsg(value);
    }
  };

  useEffect(() => {
    myRef.current?.focus();
  }, [myRef]);

  useEffect(() => {
    const messages = messageList[chatId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author !== "Bot:") {
      timerId = setTimeout(() => {
        sendMsg("Message recived!", "Bot:", 'botStyle');
      }, 1500);
      return () => clearInterval(timerId);

    }
  }, [messageList, chatId, sendMsg]);

  const messages = messageList[chatId] ?? [];

  return (

    <main className={style.noChat}>
      <div className={style.msgField}>
        {messages.map((msg, index) => (
          <div className={msg.style} key={index}>
            <h5>{msg.author}&nbsp;</h5>
            <p>{msg.message}</p>
            <span className={style.timeStamp}>&nbsp;{msg.date.toLocaleTimeString('Ru-ru')}</span>
          </div>))}
      </div>

      <div className={style.inputForm}>
        <input
          ref={myRef}
          value={value}
          onKeyPress={handlePressInput}
          onChange={(event) => setValue(event.target.value)}
          className={style.textInput} />
        <div className={style.inputForm_btnBox}>
          <Clock />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => sendMsg(value)}>Send
          </Button>
        </div>
      </div>
    </main>
  );
}