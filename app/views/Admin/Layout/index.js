import React, { Component } from 'react';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Views from 'views/Admin/Views';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Layout
        sidebar={ <Sidebar /> }
        views={ <Views /> }
      />
    )  
  }
}

export default AdminLayout;