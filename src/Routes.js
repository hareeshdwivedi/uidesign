import React from "react";
import IconLibrary from "pages/IconLibrary";
import SnoozecardPopup from "pages/SnoozecardPopup";
import ArchivedCardPopup from "pages/ArchivedCardPopup";
import PinnedCardPopup from "pages/PinnedCardPopup";
import Viewpopup from "pages/Viewpopup";
import Delete from "pages/Delete";
import SaveFilterOne from "pages/SaveFilterOne";
import SaveFilter from "pages/SaveFilter";
import Filter from "pages/Filter";
import CardFilterwithspaceco from "pages/CardFilterwithspaceco";
import ListActionsSortbyp from "pages/ListActionsSortbyp";
import Selectproject from "pages/Selectproject";
import Workflow from "pages/Workflow";
import SortbyPopupwithspace from "pages/SortbyPopupwithspace";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SortbyPopupwithspace />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/selectproject" element={<Selectproject />} />
        <Route path="/listactionssortbyp" element={<ListActionsSortbyp />} />
        <Route
          path="/cardfilterwithspaceco"
          element={<CardFilterwithspaceco />}
        />
        <Route path="/filter" element={<Filter />} />
        <Route path="/savefilter" element={<SaveFilter />} />
        <Route path="/savefilterone" element={<SaveFilterOne />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/viewpopup" element={<Viewpopup />} />
        <Route path="/pinnedcardpopup" element={<PinnedCardPopup />} />
        <Route path="/archivedcardpopup" element={<ArchivedCardPopup />} />
        <Route path="/snoozecardpopup" element={<SnoozecardPopup />} />
        <Route path="/iconlibrary" element={<IconLibrary />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
