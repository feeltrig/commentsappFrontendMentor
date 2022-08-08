import { useState } from "react";
import CommentsContainer from "./components/commentscontainer";
import PostComment from "./components/postcomment";
import Overlays from "./components/overlays/Overlays";

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
        {/* modal overlays */}
        <Overlays />
        <PostComment isRelative={false} />
      </div>
    </Provider>
  );
}

export default App;
