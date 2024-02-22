import React from 'react'
import {Dashboard as DashboardComponent, DashboardSummary} from "../../components";
import {ReusableForm} from "../../components";
const Dashboard = () => {
  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log(formData);
  };

  // const options = {
  //   interests: {
  //     label: 'Interests',
  //     type: 'checkbox',
  //     options: [
  //       { label: 'Sports', value: 'sports' },
  //       { label: 'Music', value: 'music' },
  //       { label: 'Movies', value: 'movies' },
  //     ],
  //   },
  // };
  return (
    
    <>
    <DashboardComponent >
    <DashboardSummary/>
   
    </DashboardComponent>
     </>
   
  );
}

export default Dashboard
