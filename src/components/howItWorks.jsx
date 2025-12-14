import './howItWorks.css';
import React from 'react';
import { UserPlus, Upload, Vote, Award } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Register & Join',
    description: 'Create your account in a few simple steps to officially enter the contest.',
  },
  {
    icon: Upload,
    title: 'Submit Your Design',
    description: 'Upload your best work that follows the contest theme and guidelines.',
  },
  {
    icon: Vote,
    title: 'Picturesque Community',
    description: 'Your design will be evaluated by Picturesque community members.',
  },
  {
    icon: Award,
    title: 'Win Prizes',
    description: 'Top designs judged by members of Picturesque Community and win exclusive prizes.',
  },
];


const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <p>Participating in Pixel Prize is easy. Follow these four simple steps to get started.</p>

      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">
              <step.icon size={40} />
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
