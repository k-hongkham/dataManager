import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProject from "../hooks/useProject";
import useAuth from "../hooks/userAuth";
import { getProjectById, createProject, getAllProjects } from "../../axios";
import { StatusTypes } from "./StatusTypes";

const NewProjectHeader = () => {
  const {
    projectTitle,
    setProjectTitle,
    projectOwner,
    setProjectOwner,
    projectSalesRep,
    setProjectSalesRep,
    projectDescription,
    setProjectDescription,
    status,
    setStatus,
    setCurrentProject,
    setAllProjectsArray,
  } = useProject();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const handleCreateNewProject = async (e) => {
    e.preventDefault();

    try {
      const response = await createProject(
        token,
        projectTitle,
        projectOwner,
        projectSalesRep,
        projectDescription,
        status
      );

      const newProject = await getAllProjects(token);
      setAllProjectsArray(newProject);
      setStatus("In Process");

      navigate(`/Projects`);

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getCustomer = async () => {
      const fetchedCustomer = await getProjectById(token, params.id);

      setCurrentProject(fetchedCustomer);
    };
    getCustomer();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="container mx-auto pb-3 mb-3 mb-md-5 mt-4">
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">New Project</h6>
        <form onSubmit={handleCreateNewProject}>
          <div className="form-floating mb-3">
            <input
              className="form-control rounded-4 "
              type="text"
              id="newProjectFormName"
              name="newProjectFormName"
              placeholder="NewProjectName"
              value={projectTitle}
              onChange={(e) => {
                setProjectTitle(e.target.value);
              }}
              required
            />
            <label htmlFor="newProjectFormName">Project Title: </label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control rounded-4"
              type="text"
              id="newProjectOwner"
              name="newProjectOwner"
              placeholder="new Project Owner"
              value={projectOwner}
              onChange={(e) => {
                setProjectOwner(e.target.value);
              }}
              required
            />
            <label htmlFor="newProjectOwner">Project Owner:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control rounded-4"
              type="text"
              id="projectSalesRep"
              name="projectSalesRep"
              placeholder="OurSalesRepresentative"
              value={projectSalesRep}
              onChange={(e) => {
                setProjectSalesRep(e.target.value);
              }}
              required
            />
            <label htmlFor="projectSalesRep">Sales Representative: </label>
          </div>
          <div className="form-group form-floating mb-3 ">
            <textarea
              className="form-control rounded-4 d-flex  "
              id="updateCustomerDescription"
              name="updateCustomerDescription"
              placeholder="What does this company do?"
              rows={10}
              style={{ height: "100%", overflowY: "hidden" }}
              value={projectDescription}
              onChange={(e) => {
                setProjectDescription(e.target.value);
              }}
              required
            ></textarea>

            <label htmlFor="updateCustomerDescription">Description:</label>
          </div>
          <div className="form-group form-floating mb-3 ">
            <label htmlFor="state" className="form-label"></label>
            <select
              className="form-select"
              required=""
              value={status || ""}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value=""> Status...</option>
              {StatusTypes.map((type, idx) => {
                return (
                  <option key={`TypeOfStatus: ${idx}`}>{type.name}</option>
                );
              })}
            </select>
          </div>

          <button
            className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProjectHeader;
