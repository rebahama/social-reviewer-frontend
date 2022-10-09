import styles from './App.module.css';
import NavBar from './components/NavBar';
import SignUp from './webpage/auth/SignUp';
import SignIn from './webpage/auth/SignIn';
import HomePage from './webpage/homepage/HomePage';
import {
  Route,
  Switch
} from "react-router-dom";
import './api/axios';
import CreateReview from './webpage/review/CreateReview';
import Reviews from './webpage/homepage/Reviews';
import AllReviews from './webpage/review/AllReviews';
import EditReview from './webpage/review/EditReview';
import ShowAllProfile from './webpage/profiles/ShowAllProfile';
import PersonalProfilePage from './webpage/profiles/PersonalProfilePage';
import MyReviews from './webpage/review/MyReviews';
import CategoryPageShow from './webpage/category/CategoryPageShow';
import NotFound from './components/NotFound';

function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/reviews" render={() => <AllReviews message="No results found" />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/signin" render={() => <SignIn />} />
        <Route exact path="/createreview" render={() => <CreateReview />} />
        <Route exact path="/reviews/:id" render={() => <Reviews />} />
        <Route exact path="/reviews/:id/edit" render={() => <EditReview />} />
        <Route exact path="/profilepage/" render={() => <ShowAllProfile />} />
        <Route exact path="/profiles/:id" render={() => <PersonalProfilePage />} />
        <Route exact path="/myreviews/" render={() => <MyReviews />} />
        <Route exact path="/category/:id" render={() => <CategoryPageShow />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>

  );
}

export default App;