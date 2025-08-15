// import React from "react";
"use client";
import { FiHome } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

import React from "react";
// import styled from "styled-components";

const Chain = () => {
  return (
    // TODO: use logic for each page icon bg-black and make -- instead of
    <div>
      <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className=" items-center after:mx-2 after:text-gray-200 after:content-['y'] dark:after:text-gray-500 sm:after:hidden ">
            <FiHome size={40} className="bg-black text-white p-2" />
            Address
          </span>
        </li>

        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className=" items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <MdOutlinePayment
              size={40}
              className="bg-[#f6f6f6] text-black p-2"
            />
            Payment Methode
          </span>
        </li>

        <li className=" shrink-0 items-center justify-center mx-auto">
          <span className=" items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <TiDocumentText size={40} className="bg-[#f6f6f6] text-black p-2" />
            Review
          </span>
        </li>
      </ol>
    </div>

    // const MainContainer = styled.div`
    //   width: 100%;
    //   max-width: 600px;
    //   margin: 0 auto;
    //   padding: 0 16px;
    // `

    // const StepContainer = styled.div`
    //   display: flex;
    //   justify-content: space-between;
    //   margin-top: 70px;
    //   position: relative;
    //   :before {
    //     content: '';
    //     position: absolute;
    //     background: #f3e7f3;
    //     height: 4px;
    //     width: 100%;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     left: 0;
    //   }
    //   :after {
    //     content: '';
    //     position: absolute;
    //     background: #4a154b;
    //     height: 4px;
    //     width: ${({ width }) => width};
    //     top: 50%;
    //     transition: 0.4s ease;
    //     transform: translateY(-50%);
    //     left: 0;
    //   }
    // `

    // const StepWrapper = styled.div`
    //   position: relative;
    //   z-index: 1;
    // `

    // const StepStyle = styled.div`
    //   width: 40px;
    //   height: 40px;
    //   border-radius: 50%;
    //   background-color: #ffffff;
    //   border: 3px solid ${({ step }) =>
    //       step === 'completed' ? '#4A154B' : '#F3E7F3'};
    //   transition: 0.4s ease;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // `

    // const StepCount = styled.span`
    //   font-size: 19px;
    //   color: #f3e7f3;
    //   @media (max-width: 600px) {
    //     font-size: 16px;
    //   }
    // `

    // const StepsLabelContainer = styled.div`
    //   position: absolute;
    //   top: 66px;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    // `

    // const StepLabel = styled.span`
    //   font-size: 19px;
    //   color: #4a154b;
    //   @media (max-width: 600px) {
    //     font-size: 16px;
    //   }
    // `

    // const ButtonsContainer = styled.div`
    //   display: flex;
    //   justify-content: space-between;
    //   margin: 0 -15px;
    //   margin-top: 100px;
    // `

    // const ButtonStyle = styled.button`
    //   border-radius: 4px;
    //   border: 0;
    //   background: #4a154b;
    //   color: #ffffff;
    //   cursor: pointer;
    //   padding: 8px;
    //   width: 90px;
    //   :active {
    //     transform: scale(0.98);
    //   }
    //   :disabled {
    //     background: #f3e7f3;
    //     color: #000000;
    //     cursor: not-allowed;
    //   }
    // `

    // const CheckMark = styled.div`
    //   font-size: 26px;
    //   font-weight: 600;
    //   color: #4a154b;
    //   -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
    //   -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
    //   transform: scaleX(-1) rotate(-46deg);
    // `

    // const steps = [
    //   {
    //     label: 'Address',
    //     step: 1,
    //   },
    //   {
    //     label: 'Shipping',
    //     step: 2,
    //   },
    //   {
    //     label: 'Payment',
    //     step: 3,
    //   },
    //   {
    //     label: 'Summary',
    //     step: 4,
    //   },
    // ]

    // const Chain = () => {
    //   const [activeStep, setActiveStep] = useState(1)

    //   const nextStep = () => {
    //     setActiveStep(activeStep + 1)
    //   }

    //   const prevStep = () => {
    //     setActiveStep(activeStep - 1)
    //   }

    //   const totalSteps = steps.length

    //   const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

    //   return (
    //     <MainContainer>
    //       <StepContainer width={width}>
    //         {steps.map(({ step, label }) => (
    //           <StepWrapper key={step}>
    //             <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
    //               {activeStep > step ? (
    //                 <CheckMark>L</CheckMark>
    //               ) : (
    //                 <StepCount>{step}</StepCount>
    //               )}
    //             </StepStyle>
    //             <StepsLabelContainer>
    //               <StepLabel key={step}>{label}</StepLabel>
    //             </StepsLabelContainer>
    //           </StepWrapper>
    //         ))}
    //       </StepContainer>
    //       <ButtonsContainer>
    //         <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
    //           Previous
    //         </ButtonStyle>
    //         <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
    //           Next
    //         </ButtonStyle>
    //       </ButtonsContainer>
    //     </MainContainer>
    //   )
    // }

    // export default ProgressSteps
  );
};

export default Chain;
