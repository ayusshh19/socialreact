import PrimarySearchAppBar from "./navbar/nav";
import Maincontent from "./pagecontent/maincontent";
import { Route, Routes , BrowserRouter as Router} from "react-router-dom";
import Comments from "./comments/comments";
import Profile from "./profile/profile";
import Pagenotfound from "./pagenotfound/pagenotfound";
function App() {
  
  return (
    <>
    <PrimarySearchAppBar />
    <Router>
      <Routes >
      <Route path="/"  element={<Maincontent />} exact></Route>
      <Route path="/comment/:imgid/:postid" element={<Comments />} exact></Route>
      <Route path="/profile/:profid" element={<Profile />} exact></Route>
      <Route path="*" element={<Pagenotfound />} ></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
