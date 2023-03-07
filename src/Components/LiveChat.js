import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Shared/ChatSlice";
import Store from "../Shared/Store";
import { generateName, sentenceGenerate } from "./Config/helper";
import LiveMessage from "./LiveMessage";

const LiveChat = () => {
  const messages = useSelector((Store) => Store.Chat.messages);
  console.log(messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          dp: "",
          name: generateName(),
          message: sentenceGenerate(),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      {messages.map((m) => (
        <LiveMessage dp={m.dp} name={m.name} message={m.message} />
      ))}
    </div>
  );
};

export default LiveChat;
