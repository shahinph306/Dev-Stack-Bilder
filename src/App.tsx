
import { Suspense } from "react";
import Banner from "./components/Banner"
import Dtails from "./components/Technology/Dtails";
import Nav from "./components/Nav"
import type { IDetails } from "./Types/DetailsType";
import FooterSction from "./components/FooterSction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const detailsFetch = async (): Promise<IDetails[]> =>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data
}



function App() {

const detailsPromise =  detailsFetch();


  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <ToastContainer position="top-right" autoClose={3000} />
    <Suspense fallback = { <h2>Loading......</h2>}>
      <Dtails detailsPromise ={detailsPromise}></Dtails>
    </Suspense>
    <FooterSction></FooterSction>
    </>
  )
}

export default App





