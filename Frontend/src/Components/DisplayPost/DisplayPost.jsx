import Buttons from '../Buttons/Buttons.jsx'

const DisplayPost = (props) => {
  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <ul key={index} className="border-box">
            <div>
              <li>{post.date}</li>
              <li>
                <h3>{post.name}</h3>
              </li>
              <li>{post.comment}</li>
              <Buttons post={post}/>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default DisplayPost;
