import React, { useEffect, useState } from "react";
import { X } from "react-feather";

import InputControl from "./InputControl";

import styles from "./Editor.module.css";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
function getDefaultValues(activeInformation) {
  return {
    name: activeInformation?.detail?.name || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  };
}
 
const [values, setValues] = useState(getDefaultValues(activeInformation));
  
  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Previous Job"
          placeholder="Eg. Frontend developer"
          value={values.title}
          onChange={(event) => 
            { const inputValue = event.target.value;
            if (/^[a-zA-Z\s]*$/.test(inputValue)) {
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        }}
        required
        />
          
        <InputControl
          label="Company Name"
          placeholder="Eg. Amazon"
          value={values.companyName}
          onChange={(event) =>
            { const inputValue = event.target.value;
              if (/^[a-zA-Z\s]*$/.test(inputValue)) {
              setValues((prev) => ({ ...prev, companyName: event.target.value }))
            }
          }}
          required
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificationLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: event.target.value,
            }))
          }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(event) =>
            { const inputValue = event.target.value;
              if (/^[a-zA-Z\s]*$/.test(inputValue)) {
              setValues((prev) => ({ ...prev, location: event.target.value }))
            }
          }}
          required
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
          required={true}
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={values.title}
          required={true}
          placeholder="Enter title eg. Chat app"
          onChange={(event) =>
            { const inputValue = event.target.value;
              if (/^[a-zA-Z\s]*$/.test(inputValue)) {
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          }}
        />
      </div>
      <InputControl
        label="Overview"
        value={values.overview}
        placeholder="Enter basic overview of project"
        onChange={(event) =>
          { const inputValue = event.target.value;
            if (/^[a-zA-Z\s]*$/.test(inputValue)) {
            setValues((prev) => ({ ...prev,overview: event.target.value }))
          }
        }}
        required
      />
      <div className={styles.row}>
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter github link of project"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          required={true}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          value={values.title}
          placeholder="Eg. BS(SE) or BS(CS)"
          onChange={(event) =>
            { const inputValue = event.target.value;
              if (/^[a-zA-Z\s]*$/.test(inputValue)) {
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          }}
          required
        />
      </div>
      <InputControl
        label="University/college Name"
        value={values.college}
        placeholder="Enter name of your heighest degree"
        onChange={(event) =>
          { const inputValue = event.target.value;
            if (/^[a-zA-Z\s]*$/.test(inputValue)) {
            setValues((prev) => ({ ...prev, college: event.target.value }))
          }
        }}
        required
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
      
      <InputControl
    label="Name"
    placeholder="Enter your full name eg. Ali"
    value={values.name}
    onChange={(event) => {
      const inputValue = event.target.value;
      if (/^[a-zA-Z\s]*$/.test(inputValue)) {
        setValues((prev) => ({ ...prev, name: inputValue }));
      }
    }}
    required
  />

        <InputControl
          label="Title"
          value={values.title}
          placeholder="Enter your title eg. Frontend developer"
          onChange={(event) =>
           { const inputValue = event.target.value;
            if (/^[a-zA-Z\s]*$/.test(inputValue)) {
              setValues((prev) => ({ ...prev, title: inputValue }));
            }
          }}
          required
        />
      </div>
      <div> <InputControl
        label="Professional Overview"
        value={values.overview}
        placeholder="Tell us more about your-self"
        onChange={(event) =>
          { const inputValue = event.target.value;
            if (/^[a-zA-Z\s]*$/.test(inputValue)) {
              setValues((prev) => ({ ...prev, overview: inputValue }));
            }
          }}
          required
      />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          value={values.linkedin}
          placeholder="Enter your linkedin profile link"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="Github Link"
          value={values.github}
          placeholder="Enter your github profile link"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          value={values.email}
          placeholder="Enter your email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          required
        />
        <InputControl
          label="Enter phone"
          value={values.phone}
          placeholder="Enter your phone number"
          onChange={(event) =>
           { const inputValue = event.target.value; 
            if (/^[0-9]*$/.test(inputValue)) {
              setValues((prev) => ({ ...prev, phone: event.target.value }));
            }
          }}
          required
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Volunteer Experience"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
         <InputControl
          placeholder="Awards and Honors"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
         <InputControl
          placeholder="Professional Memberships"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
        </div>
    
  );
  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    // eslint-disable-next-line default-case
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificationLink: values.certificationLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.project: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));
        break;
      }
      case sections.achievement: {
        const tempPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));
        break;
      } 
    };
  };

  const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  const handleDeleteDetail = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setActiveInformation(activeInfo);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details
        ? activeInfo.details[0]?.college || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
    });
  }, [activeSectionKey]);

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
  }, [information]);

  useEffect(() => {
    const details = activeInformation?.details;
    if (!details) return;

    const activeInfo = information[sections[activeSectionKey]];
    setValues({
      overview: activeInfo.details[activeDetailIndex]?.overview || "",
      link: activeInfo.details[activeDetailIndex]?.link || "",
      certificationLink:
        activeInfo.details[activeDetailIndex]?.certificationLink || "",
      companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
      location: activeInfo.details[activeDetailIndex]?.location || "",
      startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
      endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
      points: activeInfo.details[activeDetailIndex]?.points || "",
      title: activeInfo.details[activeDetailIndex]?.title || "",
      linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
      github: activeInfo.details[activeDetailIndex]?.github || "",
      college: activeInfo.details[activeDetailIndex]?.college || "",
    });
  }, [activeDetailIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        {/* <InputControl
          label="Title"
          placeholder="Enter section title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />  */}

        <div id="3"className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X
                    onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteDetail(index);
                    }}
                  />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>

        {generateBody()}

        <button onClick={handleSubmission} className="signupbutton" style={{ display: "block", margin: "0 auto" }}>
    Save as Draft 
  </button>      
</div>
    </div>
    
  );  
  
}

export default Editor;
