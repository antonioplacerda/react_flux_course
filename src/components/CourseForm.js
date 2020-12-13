import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            onChange={props.onChange}
            value={props.course.title}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            type="text"
            name="authorId"
            className="form-control"
            value={props.course.authorId || ""}
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            id="category"
            type="text"
            name="category"
            className="form-control"
            value={props.course.category}
            onChange={props.onChange}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
