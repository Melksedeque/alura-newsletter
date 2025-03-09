import data from "./articles.json";

export default function ArticleList() {
  return (
    <div className="articles">
      <h1>Articles</h1>
      <div className="articles-list">
        {data.map((article) => (
          <div className="article" key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
            <ul>
              {article.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
