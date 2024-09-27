import { Suspense } from "react";

import CalculateStoryPoints from "./components/CalculateStoryPoints";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CalculateStoryPoints />
      </Suspense>
    </>
  );
}

export default App;
