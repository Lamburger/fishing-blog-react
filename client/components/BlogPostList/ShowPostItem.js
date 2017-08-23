import Minimap from '../Maps/showmap.js';

const ShowPostItem = ({onRemove=f=>f, onEdit=f=>f, title, review, url, cords, _id}) =>
    <div className="post-item">
        <div className="post-title"><a className="post-title-link" href={'/posts/' + _id}>{title}</a></div>


         <img className="post-url" src={url}></img>

      <div className="miniMap">
      <Minimap lat={cords[0] > 0 ? cords[0] : 10} lng={cords[1] > 0 ? cords[1] : 10}  />
      </div>


        <div className="post-content">{review}</div>
        <div onClick={onRemove} className="post-rm-btn">(delete post)</div>
        <div className="post-edit-btn start"><a className="post-btn" href={'/editpost/' + _id}>(edit post)</a></div>
    </div>

export default ShowPostItem
