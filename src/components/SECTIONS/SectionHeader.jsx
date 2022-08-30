import React, { useState, useEffect } from "react";
import { getTemplateByType } from "../../axios";
import useAuth from "../hooks/userAuth";

const SectionHeader = () => {
  const { user } = useAuth();
  const [sectionTitle, setSectionTitle] = useState("");
  const [templateType, setTemplateType] = useState("");
  const [allTemplateTypes, setAllTemplateTypes] = useState([]);

  useEffect(() => {
    const types = async () => {
      const data = await getTemplateByType();
      setAllTemplateTypes(data);
    };
    types();
  }, [user]);
  return (
    <div>
      <form>
        <div className="form-floating mb-3">
          <input
            className="form-control rounded-4"
            type="email"
            id="sectionTitle"
            name="sectionTitle"
            placeholder="Title"
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
          />
          <label htmlFor="sectionTitle">Email: </label>
        </div>
        <div className="form-group form-floating mb-3 ">
          <label htmlFor="templateType" className="form-label"></label>
          <select
            className="form-select"
            required=""
            value={templateType || ""}
            onChange={(e) => {
              setTemplateType(e.target.value);
            }}
          >
            <option value=""> Templates...</option>
            {allTemplateTypes.map((type, idx) => {
              return (
                <option key={`TypeOfTemplate: ${idx}`}>{type.types}</option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default SectionHeader;
