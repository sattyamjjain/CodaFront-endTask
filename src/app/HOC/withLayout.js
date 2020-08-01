import React from "react";
import Header from "../component/Header";
import styled from 'styled-components'

const MainComponent = styled.div`
`;

const WrappedContainer = styled.div`
  position:relative;
  padding-top:12vh;
  overflow:auto;
  min-height:100%;
`;

const withLayout = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return (
        <MainComponent>
          <Header/>
            <WrappedContainer>
              <WrappedComponent {...this.props} />
            </WrappedContainer>
        </MainComponent>
      );
    }
  }

  return HOC;
};

export default withLayout;