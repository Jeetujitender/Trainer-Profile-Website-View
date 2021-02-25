import React, { useState } from 'react';

import "./app.css";
import About from './Components/about';
import ImageSlider from './Components/imageSlider';
import MyExpertise from './Components/myExpertise';
import MyMedicalConditionExperience from './Components/myMedicalConditionExperience';
import ModeOfTraining from './Components/modeOfTraining';
import QualificationAndLanguage from './Components/qualificationAndLangauage';
import Pricing from './Components/pricing';

const App = () => {
  const [pricingDetails, setPricingDetails] = useState({
    card1: {
      plans: 'STARTER PLAN',
      session: '5',
      amount: ' 150 ',
      save: ' 8% '
    },
    card2: {
      plans: 'POPULAR PLAN',
      session: '12',
      amount: ' 138 ',
      save: ' 12% '
    },
    card3: {
      plans: 'BEST VALUE PLAN',
      session: '24',
      amount: ' 127 ',
      save: ' 15% '
    }

  });
  return (
    <div>
      <ImageSlider />
      <About />
      <MyExpertise />
      <MyMedicalConditionExperience />
      <ModeOfTraining />
      <QualificationAndLanguage />
      <center><h1>Pricing</h1></center>
      <div className="pricing-table ">

        <Pricing plan={pricingDetails.card1.plans} amount={pricingDetails.card1.amount} save={pricingDetails.card1.save} session={pricingDetails.card1.session} />
        <Pricing plan={pricingDetails.card2.plans} amount={pricingDetails.card2.amount} save={pricingDetails.card2.save} session={pricingDetails.card2.session} />
        <Pricing plan={pricingDetails.card3.plans} amount={pricingDetails.card3.amount} save={pricingDetails.card3.save} session={pricingDetails.card3.session} />
      </div>
      <p id="note"><strong>NOTE : </strong>Above charges are for in-person training. It does not include group discount. Moreover, price for online training is 20% less than in-person training.</p>
    </div>
  )  
}
export default App;
