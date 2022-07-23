import axios from "axios";
import React, { useEffect } from "react";
import styles from "./Jobspage.module.css";
const payload = {
  title: "",
  location: "",
  experience: "",
};

function AdvanceSearching({ setIsAuth }) {
  const [userData, setUserData] = React.useState(payload);
  const { title, location, experience } = userData;

  let parm = new URLSearchParams();
 

  const handleSubmit =()=>{
  axios.get("http://localhost:5000/getjobs").then((r)=>{

  }).catch((e)=>{
    console.log(e)
  })
  }


  useEffect(() => {
    for (let key in userData) {
      if (userData[key]) {
        parm.set(key, userData[key]);
      }
    }
  }, [userData, parm]);

  const exp = [
    "Experience",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25+",
  ];
  const handleUserData = (e) => {
    const { value, name } = e.target;

    setUserData({ ...userData, [name]: value });
  };


  return (
    <div>
      <button
        style={{
          float: "right",
          backgroundColor: "transparent",
          border: "none",
          marginRight: "195px",
        }}
        onClick={() => {
          setIsAuth(false);
        }}
      >
        <div className={styles.cross}></div>
      </button>

      <div style={{ display: "flex", marginTop: "25px", marginLeft: "45px" }}>
        <div className={styles.searchInput}>
         
          <input   
          style={{textAlign:"center",alignItems:"baseline"}}
            type="text"
            placeholder="Job title,skills"
        
            name="title"
            value={title}
            onChange={handleUserData}
          />
         
        </div>
        <div className={styles.searchInput} style={{ marginLeft: "15px" }}>
         
          <input style={{textAlign:"center",alignItems:"center"}}
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={handleUserData}
          />
        </div>
        <div
          className={styles.searchInput}
          style={{ marginLeft: "15px", paddingLeft: "15px" }}
        >
          <select
            className={styles.searchInput}
            style={{ color: "gray" }}
            name="experience"
            value={experience}
            onChange={handleUserData}
          >
            {exp.map((branch) => (
              <option key={branch} value={branch}>
                {branch} yrs
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            width: "109px",
            fontSize: "10px",
            color: "#cecece",
            marginLeft: "15px",
            textAlign: "center",
          }}
        >
          <button
            className={styles.searchInput}
            style={{
              marginBottom: "10px",
              width: "109px",
              textAlign: "center",
              backgroundColor: "#f7a400",
              color: "#fff",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>{" "}
          Advanced searching
        </div>
      </div>
    </div>
  );
}

export default AdvanceSearching;