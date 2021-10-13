import React from 'react';
import NavBar from './NavBar.js';
import ModeTabs from './ModeTabs.js';
import LoginPage from './LoginPage.js';
import AppMode from './AppMode.js';
import FeedPage from './FeedPage.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  modalOpen: false,
                  dialogOpen: false,
                  testField:false,
                  userId: ""};
  }

  setMode = (newMode) => {
    this.setState({mode: newMode, testField: true});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  toggleModalOpen = () => {
    this.setState(prevState => ({dialogOpen: !prevState.dialogOpen}));
  }

  setUserId = (Id) => {
    this.setState({userId: Id});
  }

  //in render, added a conditional to render either login page or feedpage, depending on the apps state
  //also, pass the setMode as a property to LoginPage
  render() {
    return (
      <>
        <NavBar mode={this.state.mode}
                menuOpen={this.state.menuOpen}
                toggleMenuOpen={this.toggleMenuOpen}
                modalOpen={this.state.modalOpen}
                toggleModalOpen={this.toggleModalOpen}
                userId={this.state.userId}
                setUserId={this.setUserid} />
        {this.state.mode !== AppMode.LOGIN ? 
          <ModeTabs mode={this.state.mode}
                    setMode={this.setMode} 
                    menuOpen={this.state.menuOpen}
                    modalOpen={this.state.modalOpen}/> 
            : null }
        {this.state.mode === AppMode.LOGIN ?
        <LoginPage 
                   menuOpen={this.state.menuOpen}
                   modalOpen={this.state.dialogOpen}
                   toggleModalOpen={this.toggleModalOpen} 
                   userid={this.state.userId}
                   setMode={this.setMode}/>
                   :
        <FeedPage 

          />
        }
      </>
    ); 
  }

}
export default App;
