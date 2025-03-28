import { useDispatch, useSelector } from "react-redux";
import { Job } from "../../interfaces";
import { getJob, quitJob } from "../../state/jobList";
import "./style.scss";
import { AppDispatch, RootState } from "../../state/store";
import { jobHire, jobQuit } from "../../state/user";
import {useCardRemoverWhenUnfocusedString,} from "../../utils";
import React, { memo } from "react";


const JobWindow = ({
  setNavSelection,
  navSelection,
}: {
  setNavSelection: (value: string) => void;
  navSelection: string;
}) => {
  const jobsList = useSelector((state: RootState) => state.jobList);
  const day = useSelector((state:RootState)=> state.timeManage.day);
  const dispatch = useDispatch<AppDispatch>();
  const { cardRef } = useCardRemoverWhenUnfocusedString(
    setNavSelection,
    navSelection
  );
  
  
  const hiredBtn = (job: Job) => {
    if (job.hired) {
      return (
        <button
          className="quitBtn"
          onClick={() => {
            dispatch(quitJob(job.id));
            dispatch(jobQuit());
          }}
        >
          <i
            style={{
              cursor: "pointer",
            }}
            className="fa-solid fa-xmark"
          ></i>
        </button>
      )
    } else {
      return (
        <button
          onClick={() => {
            dispatch(getJob(job.id));
            dispatch(jobHire([job.job_title,job.salary,day.toString()]));
          }}
        >
          get the job
        </button>
      )
    }

  }
  return (
    <div className="blurWindowContainer">
      <div
        style={{
          width: "560px",
          height: `${jobsList.length * 60}px`,
          border: "1px solid black",
          padding: "12px",
          backgroundColor: "lightblue",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
        ref={cardRef}
      >
        <div style={{ display: "flex", flexDirection: "row-reverse", paddingBottom: "12px" }}>
          <i
            style={{
              cursor: "pointer",
            }}
            className="fa-solid fa-xmark"
            onClick={() => setNavSelection("")}
          ></i>
        </div>
        <div>
          {jobsList.map((e: Job, i) => (
            <table className="jobRow" key={i}>
              <tbody>
                <tr>
                  <td>{e.job_title}</td>
                  <td>{e.salary}</td>
                  <td>{e.required_degree}</td>
                  <td>
                    {hiredBtn(e)}
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(JobWindow);
