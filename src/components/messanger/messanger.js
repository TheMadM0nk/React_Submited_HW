import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../../index.css';
import { Clock } from './clock';
import style from '../../styles.module.css';
import classNames from 'classnames';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { messangerSelector } from '../../store/messanger/selectors';
import { deleteMessage } from '../../store/messanger';
import { sendMessageFB } from '../../store/messanger';

export const Messanger = () => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const messages = useSelector(messangerSelector(chatId))
  const myRef = useRef(null);
  const dispatch = useDispatch();

  const sendMsg = useCallback((message, author = chatId) => {
    if (message) {
      dispatch(sendMessageFB(chatId, { author: author, message: message }));
    }
    setValue('');
  }, [chatId, dispatch, setValue]);

  const handlePressInput = (e) => {
    if (e.code === "Enter") {
      sendMsg(value);
    }
  };

  const scroller = useCallback(() => {
    if (myRef.current) {
      myRef.current.scrollTo(0, myRef.current.scrollHeight);
    }
  }, [myRef]);

  useEffect(() => {
    scroller();
  }, [messages, scroller]);

  useEffect(() => {
    myRef.current?.focus();
  }, [myRef]);

  return (

    <main className={style.noChat}>
      <div ref={myRef} className={style.msgField}>
        {messages.map((msg, index) => (
          <div
            className={classNames({
              [style.msg_container]: msg.author === chatId,
              [style.botStyle]: msg.author !== chatId,
            })} key={index}
          >
            <h4>{msg.author}&nbsp;</h4>
            <p className={classNames({
              [style.msg_txt]: msg.author === chatId
            })}>
              {msg.message}
            </p>
            <span className={style.timeStamp}>&nbsp;{msg.date}</span>
            <button
              className={style.del_btn}
              onClick={() => dispatch(deleteMessage(chatId, msg.id))}
            >x</button>
          </div>))}
      </div>

      <div className={style.inputForm}>
        <textarea
          value={value}
          onKeyPress={handlePressInput}
          onChange={(event) => setValue(event.target.value)}
          className={style.textInput}
        />
        <div className={style.inputForm_btnBox}>
          <Clock />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => sendMsg(value)}
          >Send
          </Button>
        </div>
      </div>
    </main>
  );
}