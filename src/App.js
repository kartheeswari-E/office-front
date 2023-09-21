import { Route, Routes } from "react-router-dom";
import "./App.css";
import Fronend from "./Component/Layouts/Fronend";
import Backend from "./Component/Layouts/Backend";
import Template from "./Component/Template/Template";
import Dash from "./Component/Admin-pannel/Dash/Dash";
import Article from "./Component/Article/Article";
import Author from "./Component/Author/Author";
import Editor from "./Component/Editor/Editor";
import Reviewer from "./Component/Reviewer/Reviewer";
import Current from "./Component/Current-Issue/Current";
import Archieves from "./Component/Archieves/Archieves";
import Call from "./Component/Call-for-paper/Call";
import Last from "./Component/Last-copy/Last";
import Journal from "./Component/Journal/Journal";
import Aim from "./Component/Aim-Scope/Aim";
import Authorg from "./Component/AuthorG/Authorg";
import Policy from "./Component/AuthorG/Policy";
import Download from "./Component/AuthorG/Download";
import Indexing from "./Component/Indexing/Indexing";
import Issues from "./Component/Issues/Issues";
import Paper from "./Component/Paper/Paper";
import Topic from "./Component/Topic/Topic";
import Process from "./Component/Review-process/Process";
import Public from "./Component/Publication/Public";
import Apc from "./Component/APC/Apc";
import Peer from "./Component/PEER/Peer";
import Copy from "./Component/Copyright/Copy";
import Correction from "./Component/Correction/Correction";
import Copy1 from "./Component/Copy1/Copy1";
import Open from "./Component/Open/Open";
import Search from "./Component/Search/Search";
import Intrest from "./Component/Intrest/Intrest";
import Special from "./Component/Special/Special";
import Join from "./Component/Special/Join";
import Board from "./Component/Special/Board";
import Popeer from "./Component/Popeer/Popeer";
import Work from "./Component/Special/Work";
import Manuscript from "./Component/Manuscript/Manuscript";
import Step from "./Component/Step/Step";
import Clinical from "./Component/Clinical/Clinical";
import Working from "./Component/Working/Working";
import Faq from "./Component/Faq/Faq";
import Contact from "./Component/Contact/Contact";
import Review from "./Component/Review-revised/Review";
import Login from "./Component/Admin-pannel/Login/Login";
import Create from "./Component/Admin-pannel/Create/Create";
import Register from "./Component/Admin-pannel/Register/Register";
import Newpassword from "./Component/Admin-pannel/Newpassword/Newpassword";
import Email from "./Component/Admin-pannel/Email/Email";
import View from "./Component/Admin-pannel/View/View";
import CCreate from "./Component/Admin-pannel/Current/CCreate";
import EditArticle from "./Component/Admin-pannel/EditArticle/EditArticle";
import Boxes from "./Component/Admin-pannel/Boxes/Boxes";
import Manual from "./Component/Admin-pannel/Manual/Manual";
import Table from "./Component/Admin-pannel/Tables/Table";
import Cview from "./Component/Admin-pannel/Cview/Cview";
import Three from "./Component/Admin-pannel/Three/Three";
import Threeshow from "./Component/Admin-pannel/Three/Threeshow";
import Tables from "./Component/Admin-pannel/Dash/Tables";

function App() {
  const USER_TYPES = {
    ADMIN_USER: localStorage.getItem("id"),
  };
  const Current_user = USER_TYPES.ADMIN_USER;
  console.log(Current_user);

  function PublicElement({ children }) {
    return <>{children}</>;
  }
  function UserElement({ children }) {
    if (Current_user == null) {
      return <div>you donnot have a access to open this page</div>;
    } else {
      return <>{children}</>;
    }
  }

  return (
    <>
      {/* homepage-routes */}
      <Routes>
        <Route path="/" element={<Fronend />}>
          <Route index element={<Template />} />
          <Route path="/for-reviewer/review-reg" element={<Review />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/ssrg-journals" element={<Journal />} />
          <Route path="/call-for-paper" element={<Call />} />
          <Route path="/indexing" element={<Indexing />} />
          <Route path="/aim-and-scope" element={<Aim />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/for-authors" element={<Author />} />
          <Route path="/for-editors" element={<Editor />} />
          <Route path="/for-reviewer" element={<Reviewer />} />
          <Route path="/current-issue" element={<Current />} />
          <Route path="/archives" element={<Archieves />} />
          <Route path="/for-authors/author-guidelines" element={<Authorg />} />
          <Route path="/for-authors/policies" element={<Policy />} />
          <Route path="/for-authors/downloads" element={<Download />} />
          <Route path="/topics" element={<Topic />} />
          <Route path="/submission" element={<Paper />} />
          <Route path="/for-authors/reviewprocess" element={<Process />} />
          <Route path="/publication-ethics" element={<Public />} />
          <Route path="/for-authors/charges" element={<Apc />} />
          <Route path="/for-editors/review-policy" element={<Peer />} />
          <Route path="/for-authors/copyrightinfringement" element={<Copy />} />
          <Route
            path="/for-authors/conflicts-of-interest"
            element={<Intrest />}
          />
          <Route
            path="/for-authors/correction-policy"
            element={<Correction />}
          />
          <Route path="/for-authors/license-policy" element={<Copy1 />} />
          <Route path="/for-authors/openaccess-author" element={<Open />} />
          <Route
            path="/for-editors/editors-special-issues"
            element={<Special />}
          />
          <Route path="/join-as-editor" element={<Join />} />
          <Route path="/editorial-board" element={<Board />} />
          <Route path="/for-editors/review-policy" element={<Popeer />} />
          <Route path="/for-editors/editorial-workflow" element={<Work />} />
          <Route path="/for-reviewer/review-revised" element={<Manuscript />} />
          <Route
            path="/for-reviewer/step-by-step-reviewer"
            element={<Step />}
          />
          <Route
            path="/for-reviewer/reviewing-clinical"
            element={<Clinical />}
          />
          <Route path="/for-reviewer/work-editor" element={<Working />} />
          <Route path="/search" element={<Search />} />
          <Route path="/archives/:id" element={<Last />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/archives/:volume/:issue" element={<Issues />} />
        </Route>

        {/* adminpage-routes */}

        <Route path="/admin-login" element={<Backend />}>
          <Route index element={<Login />} />
          <Route
            path="/admin-login/current/dashboard"
            element={
              <UserElement>
                <Table />
              </UserElement>
            }
          />
          <Route
            path="/admin-login/create"
            element={
              <UserElement>
                <Create />
              </UserElement>
            }
          />
                    <Route
            path="/admin-login/table"
            element={
              <UserElement>
                <Tables />
              </UserElement>
            }
          />
          <Route
            path="/admin-login/Three/:volume"
            element={
              <UserElement>
                <Three />
              </UserElement>
            }
          />
          <Route
            path="/admin-login/Threes"
            element={
              <UserElement>
                <Threeshow />
              </UserElement>
            }
          />
          <Route
            path="/admin-login/Current"
            element={
              <UserElement>
                <CCreate />
              </UserElement>
            }
          />
          <Route
            path="/admin-login/admin-register"
            element={
              <UserElement>
                <Register />
              </UserElement>
            }
          />
          <Route path="/admin-login/password-reset" element={<Email />} />
          <Route
            path="/admin-login/api/password-reset/:id/:token"
            element={<Newpassword />}
          />
          <Route
            path="/admin-login/dashboard"
            element={
              <UserElement>
                <Boxes />
              </UserElement>
            }
          />
          <Route
            path="/admin-login/articles"
            element={
              <UserElement>
                <Dash />
              </UserElement>
            }
          />
          <Route
            path="/admin-login/article/edit/:id"
            element={
              <UserElement>
                <EditArticle />
              </UserElement>
            }
          />
          <Route path="/admin-login/sidebar" element={<Manual />} />
          <Route
            path="/admin-login/current/view/:id"
            element={
              <UserElement>
                <Cview />
              </UserElement>
            }
          />
          <Route
            path="/admin-login/article/view/:id"
            element={
              <UserElement>
                <View />
              </UserElement>
            }
          />
        </Route>
        {/* normal-routes */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
