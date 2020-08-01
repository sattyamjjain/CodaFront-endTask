import * as React from "react";
import AdminPageContainer from '../component/AdminPageContainer'
import withLayout from "../HOC/withLayout";

class AdminPage extends React.Component{
  render(){
    return (
      <div>
        <AdminPageContainer/>
      </div>
    );
  }
};

export default withLayout(AdminPage);