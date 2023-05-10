import Body from "./Body/Body";
import Header from "./Header/Header";

const fetchBlog = async (postSlug) => {
  const response = await fetch(`http://localhost:5000/api/posts/${postSlug}`, {
    cache: "no-store",
  });
  return response.json();
};

const PostSlug = async ({ params: { blogSlug } }) => {
  const {
    data: {
      author: { name, biography },
      category: { title:categoryTitle, englishTitle },
      title,
      readingTime,
      createdAt,
      isBookmarked,
      coverImage
    },
  } = await fetchBlog(blogSlug);
  const time = new Date(createdAt).toLocaleDateString("fa-IR");
  return (
    <>
      <Header
        isBookmarked={isBookmarked}
        englishTitle={englishTitle}
        title={categoryTitle}
        readingTime={readingTime}
        name={name}
        biography={biography}
        time={time}
      />
      <Body image={coverImage} title={title}/>
    </>
  );
};

export default PostSlug;
