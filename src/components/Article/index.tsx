import { ArticleProps } from "../../types/Article";

export default function Article({
  title,
  text,
  tags,
  image,
  alt,
}: ArticleProps) {
  return (
    <article className="article flex flex-col items-center gap-2 p-5 transition duration-300 bg-gray-200 dark:bg-dark-200 sm:rounded-2xl sm:shadow-lg sm:dark:shadow-gray-950 sm:hover:shadow-gray-200 sm:hover:shadow-lg sm:dark:hover:shadow-none">
      <h2 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h2>
      <ul className="w-full justify-end gap-2 p-0 m-0 hidden sm:flex">
        {tags.map((tag) => (
          <li
            key={tag}
            className="bg-alura-100 dark:bg-dark-100 cursor-pointer px-4 py-1 transition duration-300 rounded-full text-gray-200 font-bold text-xs uppercase hover:bg-alura-200 hover:scale-110"
          >
            {tag}
          </li>
        ))}
      </ul>
      {text.map((paragraph, index) => (
        <p key={index} className="text-alura-200 dark:text-gray-400">
          {paragraph}
        </p>
      ))}
      {image && (
        <figure>
          <img src={image} alt={alt} className="sm:p-4" />
          {alt && <figcaption className="sr-only">{alt}</figcaption>}
        </figure>
      )}
    </article>
  );
}
