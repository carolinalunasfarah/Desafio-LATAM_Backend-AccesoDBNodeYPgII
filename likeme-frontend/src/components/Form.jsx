function Form({ setTitle, setImgsrc, setDescription, addPost }) {
    return (
        <div className="form">
            <div className="mb-2">
                <h4>Add post</h4>
                <label>Title</label>
                <input
                    placeholder="Enter a title"
                    onChange={(event) => setTitle(event.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-2">
                <label>Image URL</label>
                <input
                    placeholder="Enter the URL of your image"
                    onChange={(event) => setImgsrc(event.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label>Description</label> <br />
                <textarea
                    placeholder="Describe yourself"
                    onChange={(event) => setDescription(event.target.value)}
                    className="form-control"></textarea>
            </div>
            <div className="d-flex">
                <button onClick={addPost} className="btn btn-light m-auto">
                    Add
                </button>
            </div>
        </div>
    );
}

export default Form;
