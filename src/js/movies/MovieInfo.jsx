import { forwardRef, useContext, useRef } from "react"
import "../../styles/movies/MovieInfo.css"
import { IMAGE_URL } from "../../constants";
import { useInfoStore } from "../hooks/useInfoStore";

const MovieInfo = forwardRef((props, ref) =>{
  const info = useInfoStore(state => state.info);
  return (
    <>
      <dialog ref={ref}>
        <form className="info" method="dialog">
          <div className="bar">
            <div/>
            <p>{info['title']}</p>
            <button>X</button>
          </div>
          <div className="contents">
            <img className="info poster" src={`${IMAGE_URL}${info['poster']}`}></img>
            <div className="info">
              <p>{info['overview']}</p>
              <div>{info['vote_average']}</div>
            </div>
          </div>
        </form>
      </dialog>
    </>
  )
});

export default MovieInfo;
