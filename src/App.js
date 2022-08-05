import { useState } from "react";
import CommentsContainer from "./components/commentscontainer";
import PostComment from "./components/postcomment";

import commentobject from "./design/data.json";

function App() {
  const [appState, setAppState] = useState(commentobject);
  return (
    <div className="mainapp">
      <CommentsContainer commentobject={commentobject} />
      <PostComment commentobject={commentobject} setAppState={setAppState} />
    </div>
  );
}

export default App;
