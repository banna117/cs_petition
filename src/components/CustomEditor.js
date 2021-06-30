import React, { useState } from "react";
import "./CustomEditor.scss";

export default function CustomEditor() {
  const [content, setContent] = useState("");

  return (
    <div className="custom-editor">
      <textarea
        placeholder="댓글 입력..."
        onChange={(e) => setContent(e.target.value)}
      >
        {content}
      </textarea>
      <button onClick={() => console.log(content)}>확인</button>
    </div>
  );
}