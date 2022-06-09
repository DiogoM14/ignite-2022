import { format, formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Really cool post"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDataFormatted = format(
    publishedAt,
    "d 'of' LLLL 'at' HH:mm'h'"
  );

  const publishedDateRelativeToNew = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleNewCommentChanged() {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function onDeleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Write something to comment");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDataFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNew}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <a href={item.content} key={item.content}>
                {item.content}
              </a>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          name="comment"
          placeholder="Leave a comment"
          onChange={handleNewCommentChanged}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Submit
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={onDeleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
