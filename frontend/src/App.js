import { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { ErrorPage } from "./component/Welcome";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Signup from "./component/Signup";
import Home from "./component/Home";
import HomeJobs from "./component/recruiter/HomeJobs";
import Applications from "./component/Applications";
import Profile from "./component/Profile";
import CreateJobs from "./component/recruiter/CreateJobs";
import MyJobs from "./component/recruiter/MyJobs";
import JobApplications from "./component/recruiter/JobApplications";
import AcceptedApplicants from "./component/recruiter/AcceptedApplicants";
import RecruiterProfile from "./component/recruiter/Profile";
import AdminDashboard from "./component/Admin/AdminDashboard";
import MessagePopup from "./lib/MessagePopup";
import isAuth, { userType } from "./lib/isAuth";
import Body from "./component/recruiter/Resume/Body";
import Team from "./component/Admin/team";
import Shortlist from "./component/Admin/shortlistCandidates";
import Calender from "./component/Admin/calender";
import ForgotPasswordPage from "./component/recruiter/ForgotPasswordPage";
// import sendMial from "../../backend/routes/sendMail";
import Description from "./component/description";
import ContactUs from "./component/Admin/contactUs"
import imagePage from "./component/imagePage"
import Quizz from "./component/Quizz";
import FaceMovementRecorder from "./component/faceMovement"

import InterviewForm from "./component/InterviewForm"
import "./App.css"
import { Calendar } from "react-feather";

 
// const nodemailer= require ('nodemailer');
const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const SetPopupContext = createContext();

function App() {
  const classes = useStyles();
    const [loggedin, setLoggedin] = useState(isAuth());

  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  useEffect(() => { setLoggedin(isAuth());
 },[]);
  return    (

   <BrowserRouter>
      <SetPopupContext.Provider value={setPopup}>
        <Grid container direction="column">
          <Grid item xs>
            <Navbar />
          </Grid>
          <Grid item className={classes.body}>
            <Switch>
              !loggedin ? (
                  <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/logout">
                <Logout />)
                </Route>
                <Route exact path="/applications">
                <Applications />
              </Route>
             
                
             (
             {/* <Route  path="/*">
    <Login/>
    </Route>  */}
  ):(
            
              <Route exact path="/">
                <HomeJobs/>
              </Route>
               <Route path="/resumebuilder">
                <Body />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/forgetpassword">
                <ForgotPasswordPage />
              </Route>
              <Route exact path="/interviewform">
                <InterviewForm />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/description">
                <Description />
              </Route>
              <Route exact path="/shortlistcandidates">
                <Shortlist/>
              </Route>
              <Route exact path="/facemovement">
                <FaceMovementRecorder/>
              </Route>
              <Route exact path="/quizz">
                <Quizz/>
              </Route>
              <Route exact path="/image">
                <imagePage />
              </Route>
              <Route exact path="/calender">
                <Calender />
              </Route>
              <Route exact path="/contactus">
                <ContactUs/>
              </Route>
              <Route exact path="/adminDashboard">
                <AdminDashboard />
              </Route>
              <Route exact path="/team">
                <Team />
              </Route>
              <Route exact path="/aboutus">
                <aboutUs />
              </Route>
              <Route exact path="/logout">
                <Logout />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
               <Route exact path="/applications">
                <Applications />
              </Route> 
              <Route exact path="/profile">
                {userType() === "recruiter" ? (
                  <RecruiterProfile />
                ) : (
                  <Profile />
                )}
              </Route>
              <Route exact path="/addjob">
                <CreateJobs />
              </Route>
              <Route exact path="/myjobs">
                <MyJobs />
              </Route>
              
              <Route exact path="/job/applications/:jobId">
                <JobApplications />
              </Route>
              <Route exact path="/employees">
                <AcceptedApplicants />
              </Route>
             
              <Route>
                <ErrorPage />
              </Route>)
            </Switch>
          </Grid>
        </Grid>
        <MessagePopup
          open={popup.open}
          setOpen={(status) =>
            setPopup({
              ...popup,
              open: status,
            })
          }
          severity={popup.severity}
          message={popup.message}
        />
      </SetPopupContext.Provider>
    </BrowserRouter>
  )
}

export default App;
