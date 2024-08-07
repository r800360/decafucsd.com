//import React from "react";
import header from "./assets/student/logo-header.svg"; // Import the image
import body from "./assets/student/hero-graphic-left.svg"; // Import the image
import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import { Spinner } from "reactstrap";

import Layout from "./layouts/Layout";

import DecafRoutes from "./pages/DecafPage/Routes";
import UpcomingDecafRoutes from "./pages/UpcomingEvents/DecafPage/Routes";
import HomePage from "./pages/HomePage";

// function App() {
//   return (
//     <section className="page">
//       <div className="header">
//         <img src={header} alt="Logo" height={100} style={{color: 'black'}} />
//         <span className='logo-student'>DECAF</span>
//       </div>
//       <div className="body">
//         <img src={body} alt="Logo" height={512} style={{color: 'black'}} />
//         <div className="event">
//           <p>Disciplines of Engineering Career Fair</p>
//           <p>October 9, 2024</p>
//           <p>Qualcomm Conference Center, UC San Diego</p>
//           <p id='registration'>Registration details coming soon!</p>
//         </div>
//       </div>
//       <div className="footer">
//         <span className='logo-student'>Website Under Construction</span>
//       </div>
//     </section>
//   );
// }

function LoadingSpinner(props) {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status" size="xl" />
    </div>
  );
}

function App() {
  const withLayout = (Child, isOrgs = false) => {
    return () => (
      <Layout isOrgs={isOrgs}>
        <Child />
      </Layout>
    );
  };

  useEffect(() => {
    console.log(
      "%c Interested in building awesome web projects? Email us at hello@tesc.ucsd.edu! ",
      `
            background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); 
            color: black; 
            font-size: 2rem; 
            text-align: center`
    );
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route exact path="/" component={withLayout(HomePage)} />
        <Route
          exact
          path="/orgs/membership"
          component={withLayout(MembershipPage, true)}
        />
        <Route exact path="/orgs/faqs" component={withLayout(FAQPage, true)} />

        <Route path="/decaf" component={DecafRoutes} />
        <Route path="/upcomingevents/decaf" component={UpcomingDecafRoutes} />

        <Route component={withLayout(NotFoundPage)} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);

// export default App;
