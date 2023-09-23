import Post from "../components/Post";
import {useLoaderData, Form} from "react-router-dom"

const Index = (props) => {
  const cheeses = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
  <h2>Add Your Cheese</h2>
  <Form action="/create" method="post">
      <input type="text" name="name" placeholder="Enter Cheese Name"/>
      <input type="text" name="origin_country" placeholder="Enter Origin Country"/>
      <input type="text" name="type" placeholder="Enter Type Of cheese"/>
      <button>Create New Cheese</button>
  </Form>
  </div>
  {cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
  </>;
};

export default Index;