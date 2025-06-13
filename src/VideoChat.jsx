import React, { useEffect, useRef, useState } from "react";
import DailyIframe from "@daily-co/daily-js";

const ROOM_URL = "https://anodrachat.daily.co/J5uLahrRJ8P4YBRvOnPl"; // o'zingiz yaratgan xona URL manzili

const VideoChat = () => {
  const [callObject, setCallObject] = useState(null);
  const [joined, setJoined] = useState(false);
  const videoContainerRef = useRef();

  useEffect(() => {
    const callFrame = DailyIframe.createFrame(videoContainerRef.current, {
      showLeaveButton: true,
      showFullscreenButton: true,
    });

    setCallObject(callFrame);

    callFrame.on("joined-meeting", () => {
      setJoined(true);
    });

    callFrame.on("left-meeting", () => {
      setJoined(false);
    });

    callFrame.join({ url: ROOM_URL }).catch((e) => console.error(e));

    return () => {
      callFrame.destroy();
    };
  }, []);

  return (
    <div>
      <h2>Daily.co React Video Chat</h2>
      <div
        ref={videoContainerRef}
        style={{ width: "800px", height: "600px", border: "1px solid black" }}
      ></div>
      {joined ? (
        <button onClick={() => callObject.leave()}>Chiqish</button>
      ) : (
        <p>Ulanish kutilyapti...</p>
      )}
    </div>
  );
};

export default VideoChat;
