import { useState, useEffect } from 'react';
import { Stepper as StepperMantine } from '@mantine/core';
import Step1 from '@/components/UploadPhoto/Steps/Step1';
import Step2 from '@/components/UploadPhoto/Steps/Step2';

const Stepper = () => {
  const TOTAL_STEPS = 3;

  const STEP_SIZES = {
    step1: 430,
    step2: 210,
    step3: 210,
  };

  const [active, setActive] = useState(0);
  const [modalHeight, setModalHeight] = useState<number>(STEP_SIZES.step1);
  const [isSubmitButton, setIsSubmitButton] = useState<boolean>(false);
  const [isUploadingPublication, setIsUploadingPublication] =
    useState<boolean>(false);

  const nextStep = () =>
    setActive(current => (current < TOTAL_STEPS ? current + 1 : current));
  const prevStep = () =>
    setActive(current => (current > 0 ? current - 1 : current));

  useEffect(() => {
    const updateModalHeight = () => {
      switch (active) {
        case 0:
          setModalHeight(STEP_SIZES.step1);
          break;
        case 1:
          setModalHeight(STEP_SIZES.step2);
          break;
        case 2:
          setModalHeight(STEP_SIZES.step3);
          break;
      }
    };

    setIsSubmitButton(active === TOTAL_STEPS - 1);
    setIsUploadingPublication(active === TOTAL_STEPS);
    updateModalHeight();
  }, [active]);

  return (
    <StepperMantine
      active={active}
      onStepClick={setActive}
      style={{ height: modalHeight, transition: 'height .3s' }}>
      <StepperMantine.Step label="Select your photo">
        <Step1
          isSubmitButton={isSubmitButton}
          isUploadingPublication={isUploadingPublication}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </StepperMantine.Step>
      <StepperMantine.Step label="Add a title">
        <Step2
          isSubmitButton={isSubmitButton}
          isUploadingPublication={isUploadingPublication}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </StepperMantine.Step>
      <StepperMantine.Step label="Confirm your data">
        Step 3 content: Verify email
      </StepperMantine.Step>
    </StepperMantine>
  );
};

export default Stepper;
