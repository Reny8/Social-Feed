const DisplayPost = (props) => {
  return (
    <table>
      <tbody>
        {props.postEntries.map((post,index) => {
          return (
            <tr key={index}>
              <td>{post.date}</td>
              <td><h2>{post.name}</h2></td>
              <td>{post.comment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPost;
