import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return(
    <div>
      <p>Kitchen</p>
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen