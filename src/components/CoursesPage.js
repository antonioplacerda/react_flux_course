import React, { useEffect, useState } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { toast } from "react-toastify";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleDelete(courseId) {
    deleteCourse(courseId);
    toast.success("Course deleted");
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={handleDelete} />
    </>
  );
}

export default CoursesPage;
