import Carousel from "./Components/Carousel"
import ExploreTopBooks from "./Components/ExploreTopBooks"
import Heros from "./Components/Heros"
import LibraryServices from "./Components/LibraryServices"


function HomePage() {
  return (
    <div>
   <ExploreTopBooks/>
    <Carousel/>
    <Heros/>
    <LibraryServices/>
    </div>
  )
}

export default HomePage