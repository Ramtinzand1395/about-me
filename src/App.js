import React, {  useState , useEffect } from 'react'
//components
import HomePage from "./components/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import TabPanel from "./components/navbar/tabs/Tabpanel";
import MainLayout from "./template/layouts/MainLayout";
import About from './components/about/About';
import Rezome from './components/rezome/Rezome';
import Contact from './components/contact/Contact';
//swip
function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageNumber = (event, newPage) => {
        setPageNumber(newPage);
    };
    const [mode , setMode] = useState();
    useEffect(()=>{
        setMode("dark");
    },[]);
    const handleMode = ()=>{
        setMode(prevMode=>prevMode === "light" ? "dark" : "light")
    }
    return (
        <MainLayout mode={mode}>
            <Navbar pageNumber={pageNumber} handlePageNumber={handlePageNumber} handleMode={handleMode} />
            <TabPanel pageNumber={pageNumber} index={0}>
                <HomePage />
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={1}>
                <About />
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={2}>
                <Rezome />
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={3}>
                <Contact />
            </TabPanel>
        </MainLayout >
 );
}

export default App;
