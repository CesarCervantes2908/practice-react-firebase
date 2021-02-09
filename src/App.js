import { ChatRoom } from "./components/ChatRoom";

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand text-white">Chat React</a>
        </nav>
      </header>
      <main className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ChatRoom></ChatRoom>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
