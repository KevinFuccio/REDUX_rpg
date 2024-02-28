import { useDispatch, useSelector } from "react-redux";
import { Job } from "../../interfaces";
import { hiring, quit } from "../../state/jobList";
import "./style.scss";
import { AppDispatch, RootState } from "../../state/store";
import { jobHire, jobPay } from "../../state/user";
import { useState } from "react";

const JobWindow = ({
  setNavSelection,
}: {
  setNavSelection: (value: string) => void;
}) => {
  const jobsList = useSelector((state: RootState) => state.jobList);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  
  const handleMonthlyPay = (salary:string)=>{
    if(intervalId != null){
      clearInterval(intervalId)
      setIntervalId(null)
    }
    const newIntervalId = setInterval(()=>{
      dispatch(jobPay(salary))
    },5000);
    setIntervalId(newIntervalId)
    

    
  }
  return (
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
    >
      <div>
        <i
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "row-reverse",
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
                  {e.hired ? (
                    <button
                      className="quitBtn"
                      onClick={() => dispatch(quit(e.id))}
                    >
                      <i
                        style={{
                          cursor: "pointer",
                        }}
                        className="fa-solid fa-xmark"
                      ></i>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(hiring(e.id));
                        dispatch(jobHire(e.job_title));
                        handleMonthlyPay(e.salary)
                        
                      }}
                    >
                      get the job
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};
export default JobWindow;
