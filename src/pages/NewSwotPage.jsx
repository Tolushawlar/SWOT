import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../ui/newSwot.css";
import Questionnaire from "../ui/Questionnaire";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

ChartJS.register(ArcElement, Tooltip, Legend);
function NewSwotPage() {
  return (
    <>
    <Header/>
    <Questionnaire/>
    <Footer/>
    </>
  )
}

export default NewSwotPage
