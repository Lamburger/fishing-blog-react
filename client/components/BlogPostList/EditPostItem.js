const EditPostItem = ({onRemove=f=>f, onEdit=f=>f, title, review, url, cords}) => {
    let new_title = ''
    let new_review = ''
    return (
        <div className="post-item edit">
            <input autoFocus placeholder="Edit Post title..."
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            onEdit(new_title.value, new_review.value)
                        }
                    }}
                    defaultValue={title}
                    ref={input=>new_title=input}></input>
            <textarea placeholder="Edit Post review..."
                    defaultValue={review}
                    ref={input=>new_review=input}></textarea>
            <div onClick={onRemove} className="post-rm-btn">X</div>
            <div onClick={()=>onEdit(new_title.value, new_review.value)} className="post-edit-btn">✓</div>
        </div>
    )//return
}

export default EditPostItem
