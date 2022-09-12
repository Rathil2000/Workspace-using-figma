import React from "react";
import SheetsFourteen from "pages/SheetsFourteen";
import SheetsThirteen from "pages/SheetsThirteen";
import SheetsTwelve from "pages/SheetsTwelve";
import SheetsEleven from "pages/SheetsEleven";
import SheetsTen from "pages/SheetsTen";
import SheetsNine from "pages/SheetsNine";
import SheetsEight from "pages/SheetsEight";
import SheetsauthoringOne from "pages/SheetsauthoringOne";
import SheetsLibraryOne from "pages/SheetsLibraryOne";
import SheetsSeven from "pages/SheetsSeven";
import SheetsSix from "pages/SheetsSix";
import SheetsFive from "pages/SheetsFive";
import SheetsFour from "pages/SheetsFour";
import SheetsThree from "pages/SheetsThree";
import SheetsTwo from "pages/SheetsTwo";
import Frame from "pages/Frame";
import SheetsLibrary from "pages/SheetsLibrary";
import SheetsOne from "pages/SheetsOne";
import Sheetsauthoring from "pages/Sheetsauthoring";
import Sheets from "pages/Sheets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/sheetsauthoring" element={<Sheetsauthoring />} />
        <Route path="/sheetsone" element={<SheetsOne />} />
        <Route path="/sheetslibrary" element={<SheetsLibrary />} />
        <Route path="/frame" element={<Frame />} />
        <Route path="/sheetstwo" element={<SheetsTwo />} />
        <Route path="/sheetsthree" element={<SheetsThree />} />
        <Route path="/sheetsfour" element={<SheetsFour />} />
        <Route path="/sheetsfive" element={<SheetsFive />} />
        <Route path="/sheetssix" element={<SheetsSix />} />
        <Route path="/sheetsseven" element={<SheetsSeven />} />
        <Route path="/sheetslibraryone" element={<SheetsLibraryOne />} />
        <Route path="/sheetsauthoringone" element={<SheetsauthoringOne />} />
        <Route path="/sheetseight" element={<SheetsEight />} />
        <Route path="/sheetsnine" element={<SheetsNine />} />
        <Route path="/sheetsten" element={<SheetsTen />} />
        <Route path="/sheetseleven" element={<SheetsEleven />} />
        <Route path="/sheetstwelve" element={<SheetsTwelve />} />
        <Route path="/sheetsthirteen" element={<SheetsThirteen />} />
        <Route path="/sheetsfourteen" element={<SheetsFourteen />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
