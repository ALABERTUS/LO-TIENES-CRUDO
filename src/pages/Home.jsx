import { useState } from "react";

import ShowQueries from "../components/ShowQueries";
import UpdateQueries from "../components/UpdateQueries"; 

const Home = () => {
  const [queriesToUpdate, setQueriesToUpdate] = useState(null);

  const handleUpdateClick = (queriesId) => {
    setQueriesToUpdate(queriesId);
  };

  return (
    <div>
      <ShowQueries handleUpdateClick={handleUpdateClick} />
      {queriesToUpdate !== null && <UpdateQueries queriesId={queriesToUpdate} />}
    </div>
  );
}

export default Home;
