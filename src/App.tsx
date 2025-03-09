import { useState } from "react";
import { User } from "./types/Form";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState<User | undefined>();
  const hasUser = Boolean(user);

  const handleSubmit = (name: string, email: string) => {
    setUser({ name, email });
  };

  return (
    <div className="h-screen sm:p-5">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
