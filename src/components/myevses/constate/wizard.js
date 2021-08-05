import { useState } from 'react';
import constate from "constate";

export function useWizard() {
  const [wizardOpen, setWizardOpen] = useState(false);
  return {
    wizardOpen,
    setWizardOpen
  };
}

export const [WizardProvider, getWizard] = constate(useWizard);
