import { useState } from "react";

import ShowQueries from "../components/ShowQueries";
import UpdateQueries from "../components/UpdateQueries"; 

const Home = () => {
  const [queriesToUpdate, setQueriesToUpdate] = useState(null);

  const handleUpdateClick = (queryId) => {
    setQueriesToUpdate(queryId);
  };

  return (
    <div>
      <ShowQueries handleUpdateClick={handleUpdateClick} />
      {queriesToUpdate !== null && <UpdateQueries queryId={queriesToUpdate} />}
    </div>
  );
}

export default Home;
