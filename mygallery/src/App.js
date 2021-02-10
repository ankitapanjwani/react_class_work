import './App.css';
import Header from './header';
import Footer from './footer';
// import Main from './main';
import Body from './body';
import AddImage from './AddImage';
// import Search from './search';
import {Route} from 'react-router-dom'
import Navigation from './navigation';
import DetailedImage from './detailedImage';
import UsersList from './Users';
import ImageList from './container/image-list';
// import Particlesdemo from './particlesdemo';


function App() {

  var mainbcontents={
    name: "Cybage",
    header: "Header extra contents..."
  }
  // var colors = ['purple','green', 'blue'];

  

  return (

    <div>
      <Header title={mainbcontents.name}></Header>
      
      {/* <Main image={images}></Main> */}
      {/* <AddImage></AddImage> */}
      {/* <Search image={images}></Search> */}
      <Navigation></Navigation>
      <Route path="/listImage/:id" component={DetailedImage}></Route>
      <Route path="/addImage" component={AddImage}></Route>
        <Route path="/listImage" exact component={Body}></Route>
        <Route path="/users" exact component={UsersList}></Route>
      {/* <Route path="/" component={DetailedImage}></Route> */}


      {/* <Body></Body> */}
    {/* <Particlesdemo></Particlesdemo> */}
    
    <ImageList></ImageList>
      <Footer message="@copyright"></Footer>

     
    </div>
  );
}

export default App;
