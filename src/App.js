import { useState } from "react";
import CommentsContainer from "./components/commentscontainer";
import PostComment from "./components/postcomment";

// JSON
import commentobject from "./design/data.json";

// REDUX
import store from "./appState/mainStore";
import { Provider } from "react-redux";

function App() {
  const [appState, setAppState] = useState(commentobject);
  return (
    <Provider store={store}>
      <div className="mainapp">
        <CommentsContainer />
        <PostComment commentobject={commentobject} setAppState={setAppState} />
      </div>
    </Provider>
  );
}

export default App;
