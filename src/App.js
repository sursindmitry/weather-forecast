import React from 'react';
import './App.scss';
import Inputs from './components/Inputs';
import TopButtons from "./components/TopButtons";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-slate-50">
            <div
                className="mx-auto max-w-screen-lg py-10 px-32 bg-gradient-to-br from-cyan-800 to-blue-600 h-fit shadow-xl shadow-gray-400">
                <img src="/logo.svg" alt="Logo" className="flex justify-center w-auto"/>
                <TopButtons/>
                <Inputs/>
                <TimeAndLocation/>
                <TemperatureAndDetails/>
                <Forecast title="Час"/>
                <Forecast title="День"/>
                <Footer/>
            </div>
        </div>

    );
}

export default App;
