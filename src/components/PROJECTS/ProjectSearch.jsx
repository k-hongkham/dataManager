import React from "react";
import useProject from "../hooks/useProject";
import { useNavigate } from "react-router-dom";

const ProjectSearch = () => {
  const navigate = useNavigate();

  const { searchObj, setSearchObj, searchTerm, setSearchTerm } = useProject();

  return (
    <form
      className="form-inline mt-2 mt-md-0"
      style={{ flexGrow: "1", display: "flex", margin: "0 3rem 0 3rem" }}
      onSubmit={(e) => {
        e.preventDefault();
        setSearchObj({ ...searchObj, query: searchTerm });
        navigate(`/Projects?q=${searchTerm}`);
      }}
    >
      <input
        className="needs-validation mr-sm-2"
        style={{ flexGrow: "1", padding: ".25rem" }}
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 2 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-3"
        >
          <circle cx="10.5" cy="10.5" r="7.5"></circle>
          <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
        </svg>
      </button>
    </form>
  );
};

export default ProjectSearch;
