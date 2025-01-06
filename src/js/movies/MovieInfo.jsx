import { useContext } from "react"
import "../../styles/movies/MovieInfo.css"
import { InfoContext } from "./MainContents";

export default function MovieInfo(){
  const info = useContext(InfoContext);
  return (
    <>
      <dialog>
        <form className="info" method="dialog">
          <div className="bar">
            <div/>
            <p>{info['title']}</p>
            <button>X</button>
          </div>
          <div className="contents">
            <img></img>
            <div>
              <p>{info['overview']}</p>
              <div>{info['vote_average']}</div>
            </div>
          </div>
        </form>
      </dialog>
    </>
  )
}
