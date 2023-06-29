import BlogActions from "./BlogActions/BlogActions";
import BlogComments from "./BlogComments/BlogComments";
import Body from "./Body/Body";
import Header from "./Header/Header";
import RelatedPosts from "./RelatedPosts/RelatedPosts";
import { cookies } from "next/headers";

const fetchBlog = async (postSlug) => {
  const nextCookies = cookies();
  const response = await fetch(`http://localhost:5000/api/posts/${postSlug}`, {
    cache: "no-store",
    credentials: "include",
    headers: {
      Cookie: nextCookies.get("userToken")?.value || "",
    },
  });
  return response.json();
};

const PostSlug = async ({ params: { blogSlug } }) => {
  const {
    data: {
      author: { name, biography },
      category: { title: categoryTitle, englishTitle },
      title,
      readingTime,
      createdAt,
      isBookmarked,
      coverImage,
      likesCount,
      commentsCount,
      isLiked,
      slug,
      related,
      comments,
      _id
    },
  } = await fetchBlog(blogSlug);
  return (
    <>
      <Header
        isBookmarked={isBookmarked}
        englishTitle={englishTitle}
        title={categoryTitle}
        readingTime={readingTime}
        name={name}
        biography={biography}
        time={createdAt}
      />
      <Body image={coverImage} title={title} />
      <BlogActions
        englishTitle={englishTitle}
        title={title}
        slug={slug}
        likesCount={likesCount}
        isLiked={isLiked}
        commentsCount={commentsCount}
        isBookmarked={isBookmarked}
      />
      <RelatedPosts relatedPosts={related} />
      <BlogComments comments={comments.reverse()} postID={_id} />
    </>
  );
};

export default PostSlug;
