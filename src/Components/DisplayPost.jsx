const DisplayPost = (props) => {
  return (
    <table>
      <tbody>
        {props.postEntries.map((post) => {
          return (
            <tr>
              <td>{post.date}</td>
              <td><h2>{post.name}</h2></td>
              <td>{post.post}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPost;
