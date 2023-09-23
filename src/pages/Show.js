import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = (props) => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.origin_country}</h2>
      <h3>{post.type}</h3>
      <div style={{ textAlign: "center" }}>
        <h2>Update Your Cheese</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="Enter Cheese name"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="origin_country"
            placeholder="Enter Origin Country"
            defaultValue={post.origin_country}
          />
         <input
            type="text"
            name="type"
            placeholder="Enter Type Of Cheese"
            defaultValue={post.type}
          />
          <button>Update Cheese</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete Cheese</button>
        </Form>
      </div>
      <Link to="/"><button>Go Back</button></Link>
    </div>
  );
};

export default Show;