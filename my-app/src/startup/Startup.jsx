import React from 'react';
import Navbar from '../Navbar';
import './Startup.css'
import CEOInfo from './ImageComponent.jsx';
import AboutUs from './About.jsx';
import ImageComponent from './ImageComponent.jsx';
import Navbar_startup from './Navbar_startup.jsx';
import FinancialMetrics from './FinancialMetrics.jsx';
import InvestorsHistory from './InvestorHistory.jsx';
import './comp.css';
import CommentInput from './comment/CommentInput.jsx';
import CommentSection from './commentsection.jsx';


function Startup()
{
    


    return(
        <>
<Navbar_startup/>
<ImageComponent/>
<AboutUs/>
<div className="main_content">
<InvestorsHistory/>
<FinancialMetrics/>

</div>
<CommentSection/>

        </>
    )
} 

export default Startup;
