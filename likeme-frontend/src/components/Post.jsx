function Post({
  post: { id, title, imgsrc, description, likes },
  like,
  erasePost,
}) {
  return (
    <div className="card col-12 col-sm-4 d-inline mx-0">
      <div className="card-body p-0 mb-3">
        <img
          className="card-img-top "
          src={imgsrc}
        />
        <div className="p-3">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <i
                onClick={() => like(id)}
                className={`fa-heart fa-xl ${
                  likes ? "fa-solid" : "fa-regular"
                }`}
              ></i>
              <span className="ms-1">{likes}</span>
            </div>
            <i
              onClick={() => erasePost(id)}
              className="fa-solid fa-x"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
