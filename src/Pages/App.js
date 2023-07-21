import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import LandingPage from "./LandingPage";
import Counseling from "./Counseling";
import Events from "./Events";
import Team from "./Team";
import Archive from "./Archive";
import About from "./About";
import Library from "./Library";
import Meditation from "./Meditation";
import Registration from "./Registration";
import Speaker from "./Speaker";
import PrivateRoute from "../component/PrivateRoute";
import Login from "./Login";
import Admin from "./Admin";
import Listing from "./admin/Listing";
import PastEvents from "./admin/PastEvents";
import ArchiveListing from "./admin/ArchiveListing";
import RegListing from "./admin/RegListing";
import EventsCreation from "./admin/EventsCreation";
import EditEvent from "./admin/EditEvent";

import Error from "./Error";
import CounselingListing from "./admin/CounselingListing";
import MeditationListing from "./admin/MeditationListing";
import SpeakerListing from "./admin/SpeakerListing";
import LibraryListing from "./admin/LibraryListing";
import Notice from "./admin/Notice";
import Rewards from "./admin/Rewards";
import Skillverse from "./Skillverse";

document.onkeydown = function (e) {
  if (e.keyCode === 123) {
    return true;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode === "I".charCodeAt(0) || e.keyCode === "i".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode === "C".charCodeAt(0) || e.keyCode === "c".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode === "J".charCodeAt(0) || e.keyCode === "j".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    (e.keyCode === "U".charCodeAt(0) || e.keyCode === "u".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    (e.keyCode === "S".charCodeAt(0) || e.keyCode === "s".charCodeAt(0))
  ) {
    return false;
  }
};

const App = () => {
  return (
    <React.Fragment className="debug-screens">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/skillverse" element={<Skillverse />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/counseling" element={<Counseling />} />
          <Route exact path="/library" element={<Library />} />
          <Route exact path="/meditation" element={<Meditation />} />
          <Route
            exact
            path="/events/:eventID/registration"
            element={<Registration />}
          />
          <Route exact path="/speaker" element={<Speaker />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/archive" element={<Archive />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/admin/events/listing" element={<PrivateRoute />}>
            <Route path="/admin/events/listing" element={<Listing />} />
          </Route>
          <Route path="/admin/events/create" element={<PrivateRoute />}>
            <Route path="/admin/events/create" element={<EventsCreation />} />
          </Route>
          <Route path="/admin/events/past" element={<PrivateRoute />}>
            <Route path="/admin/events/past" element={<PastEvents />} />
          </Route>
          <Route path="/admin/events/archive" element={<PrivateRoute />}>
            <Route path="/admin/events/archive" element={<ArchiveListing />} />
          </Route>
          <Route path="/edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:eventID" element={<EditEvent />} />
          </Route>
          <Route path="/admin/counseling-listing" element={<PrivateRoute />}>
            <Route
              path="/admin/counseling-listing"
              element={<CounselingListing />}
            />
          </Route>
          <Route path="/admin/meditation-listing" element={<PrivateRoute />}>
            <Route
              path="/admin/meditation-listing"
              element={<MeditationListing />}
            />
          </Route>
          <Route path="/admin/library-listing" element={<PrivateRoute />}>
            <Route path="/admin/library-listing" element={<LibraryListing />} />
          </Route>
          <Route path="/admin/speaker-listing" element={<PrivateRoute />}>
            <Route path="/admin/speaker-listing" element={<SpeakerListing />} />
          </Route>
          <Route path="/admin/notice" element={<PrivateRoute />}>
            <Route path="/admin/notice" element={<Notice />} />
          </Route>
          <Route path="/admin/rewards" element={<PrivateRoute />}>
            <Route path="/admin/rewards" element={<Rewards />} />
          </Route>

          <Route
            path="/admin/events/listing/:eventID/happiness2023"
            element={<PrivateRoute />}
          >
            <Route
              path="/admin/events/listing/:eventID/happiness2023"
              element={<RegListing />}
            />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
