import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Header from "./Header";
import Photos from "./Photos";
import Footer from "./Footer";
import { useEffect } from "react";
import { loadPhotos } from "../redux/actions";
import Modal from "./Modal";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos());
  });
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Photos />
      </Route>
      <Route path="/:id?">
        <Modal />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
