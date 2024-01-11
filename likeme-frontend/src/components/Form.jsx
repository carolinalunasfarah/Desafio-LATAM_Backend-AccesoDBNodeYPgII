import { useState } from "react";
import { errorToast } from "../utils/toast.js";

function Form({ addPost }) {
    const [values, setValues] = useState({
        title: "",
        imgsrc: "",
        description: "",
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, imgsrc, description } = values;

        if (!title.trim() || !imgsrc.trim() || !description.trim())
            return errorToast("All fields are required");

        const post = {
            title: title.trim(),
            imgsrc: imgsrc.trim(),
            description: description.trim(),
        };

        addPost({ ...post });

        setValues({
            title: "",
            imgsrc: "",
            description: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <section className="mb-2">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    placeholder="Enter a title"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    className="form-control"
                    value={values.title}
                />
            </section>
            <section className="mb-2">
                <label htmlFor="imgsrc" className="form-label">
                    Image URL
                </label>
                <input
                    type="text"
                    placeholder="Enter the image URL"
                    id="imsrc"
                    name="imgsrc"
                    onChange={handleChange}
                    className="form-control"
                    value={values.imgsrc}
                />
            </section>
            <section className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    id="description"
                    placeholder="Describe yourself"
                    className="form-control"
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                />
            </section>
            <button
                type="submit"
                className="btn btn-light mx-auto d-block"
                disabled={
                    !values.title.trim() ||
                    !values.imgsrc.trim() ||
                    !values.description.trim()
                }>
                Add
            </button>
        </form>
    );
}

export default Form;
