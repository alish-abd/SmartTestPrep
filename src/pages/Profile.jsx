import React from "react";
import ActivitiesForm from "../components/forms/ActivitiesForm";
import DemographicsForm from "../components/forms/DemographicsForm";
import NameForm from "../components/forms/NameForm";
import Layout from "../components/layout/Layout";
import "../styles/pages/pages.css";

const Profile = () => {
  return (
    <Layout>
      <div className="page-layout">
        <h1 className="page-layout__title">Profile</h1>
        <NameForm />
        <div className="page-layout__card">
          <h2 className="page-layout__subtitle">Demographics</h2>
          <DemographicsForm />
        </div>
        <div className="page-layout__card">
          <h2 className="page-layout__subtitle">Activities</h2>
          <ActivitiesForm />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
