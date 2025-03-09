import Article from "../Article";

export default function ArticleList() {
  return (
    <section className="articles mt-5 sm:mt-0 flex flex-col gap-5 m-auto max-w-5xl">
      <h1 className="text-center text-3xl">Articles</h1>
      <div className="articles-list mt-5 sm:mt-0 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Article />
      </div>
    </section>
  );
}
