import { useState } from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  return (
    <>
      <Header />
      {hasUser && <ArticleList />}
      {!hasUser && <Form onSubmit={setUser} />}
    </>
  );
}

export default App;
