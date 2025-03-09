import data from "./articles.json";

export default function Article() {
  {
    data.map((article) => (
      <div className="article" key={article.id}>
        <h2>{article.title}</h2>
        <p>{article.text}</p>
        <ul>
          {article.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    ));
  }
}
