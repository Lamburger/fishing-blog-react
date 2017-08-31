import Minimap from '../Maps/showmap.js';

const ShowPostItem = ({onRemove=f=>f, onEdit=f=>f, title, review, url, cords, _id}) =>
    
      <div className="post-item">
        
        <div className="row">
          <div className="col-md-12">
            <div className="post-title"><a className="post-title-link" href={'/posts/' + _id}>{title}</a></div>
            <div className="row">
              <div className="col-md-6">
                <img className="img-responsive" src={url}></img>
                <div className="text-center">
                  <div className="post-content">{review}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="miniMap">
                  <Minimap lat={cords[0] > 0 ? cords[0] : 10} lng={cords[1] > 0 ? cords[1] : 10}  />
                </div>
                <div className="text-center">
                  <div onClick={onRemove} className="post-rm-btn">(delete post)</div>
                  <div className="post-edit-btn start"><a className="post-btn" href={'/editpost/' + _id}>(edit post)</a></div>
                </div>
                
              </div>
            
            </div>

          </div>
        </div>

        </div>



export default ShowPostItem
