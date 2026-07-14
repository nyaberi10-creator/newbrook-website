export interface AssessmentState {
  businessType?: string;
  primaryGoal?: string;
  biggestChallenge?: string;
  services: string[];
  timeline?: string;
}

export interface StepProps {
  next: () => void;
  back: () => void;
}