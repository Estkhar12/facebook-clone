import Feed from "./Feed";
import Header from "./Header";
// import Login from "./Login";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";


function App() {
  return (
    <>
     (
        {/* <Login /> */}
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <RightSidebar />
          </div>
        </div>
      )
    </>
  );
}

export default App;
