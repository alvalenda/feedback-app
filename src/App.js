function App() {
  const title = "Blog Post";
  const body = "This is a blog post";
  const comments = [
    { id: 1, text: "This is a comment" },
    { id: 2, text: "This is another comment" },
    { id: 3, text: "This is a third comment" },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading...</h1>;

  const commentBlock = (
    <div className="comments">
      <h3> Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <h1> {title.toUpperCase()} </h1>
      <p>{body}</p>

      {showComments && commentBlock}
    </>
  );
}

export default App;
