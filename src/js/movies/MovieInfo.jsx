import "../../styles/movies/MovieInfo.css"

export default function MovieInfo(){
  return (
    <>
      <dialog>
        <form className="info" method="dialog">
          <div className="bar">
            <div/>
            <p>제목</p>
            <button>X</button>
          </div>
          <div className="contents">
            <img></img>
            <div>
              <p>장르</p>
              <p>줄거리</p>
              <div>별점</div>
            </div>
          </div>
        </form>
      </dialog>
    </>
  )
}
