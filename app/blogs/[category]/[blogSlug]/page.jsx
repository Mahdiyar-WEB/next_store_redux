import BlogActions from "./BlogActions/BlogActions";
import Body from "./Body/Body";
import Header from "./Header/Header";
import RelatedPosts from "./RelatedPosts/RelatedPosts";

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
      coverImage,
      likesCount,
      commentsCount,
      isLiked,
      slug,
      related
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
      <BlogActions englishTitle={englishTitle} title={title} slug={slug} likesCount={likesCount} isLiked={isLiked} commentsCount={commentsCount} isBookmarked={isBookmarked} />
      <RelatedPosts relatedPosts={related} />
    </>
  );
};

export default PostSlug;
