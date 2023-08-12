import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const cheese = useLoaderData();

  return (
    <div>
        <h2>Create a Cheese</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="cheese's name"/>
            <input type="text" name="title" placeholder="cheese's title"/>
            <input type="text" name="image" placeholder="cheese's image"/>
            <input type="submit" value="Create Cheese"/>
        </Form>
      {cheese.map((cheese, index) => {
        return (
          <div key={cheese._id} className="cheese">
            <Link to={`/${cheese._id}`}>
              <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>{cheese.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;