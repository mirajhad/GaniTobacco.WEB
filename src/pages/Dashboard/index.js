import React from 'react'
import {Dashboard as DashboardComponent, DashboardSummary} from "../../components";
const Dashboard = () => {
  

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
