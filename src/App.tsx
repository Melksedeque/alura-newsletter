import { useState } from "react";
import { User } from './types/Form';
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState<User | undefined>();
  const hasUser = Boolean(user);
  return (
    <>
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser} />}
    </>
  );
}

export default App;
