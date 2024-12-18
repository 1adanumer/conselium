import React from 'react';
import './Methodology.css';

const Methodology = () => {
  const steps = [
    {
      title: 'Step 01',
      description: [
        'Initial Assessment and Gap Analysis',
        'Review current AMLCFT practices and compliance status',
        'Identify gaps and vulnerabilities in existing systems',
        'Prepare a comprehensive report with findings and recommendations',
      ],
    },
    {
      title: 'Step 02',
      description: [
        'Customized Strategy Development',
        'Design tailored AMLCFT programs based on risk assessment',
        'Develop enhanced procedures for high-risk areas and emerging threats',
        'Create policies for customer due diligence and transaction monitoring',
      ],
    },
    {
      title: 'Step 03',
      description: [
        'Implementation and Training',
        'Assist in implementing new policies and advanced detection solutions',
        'Conduct comprehensive staff training across all levels',
        'Establish internal audit and reporting processes',
      ],
    },
    {
      title: 'Step 04',
      description: [
        'Continuous Support and Optimization',
        'Provide ongoing advisory and forensic investigation support',
        'Conduct regular risk assessments and assist with regulatory examinations',
        'Continuously refine AMLCFT programs based on performance and trends',
      ],
    },
  ];

  return (
    <section className="methodology">
      <h2 className="methodology-heading">Methodology</h2>
      <p className="methodology-paragraph">
        Our expert business consulting approach toward regulated entities worldwide.
      </p>
      <div className="methodology-cards">
        {steps.map((step, index) => (
          <div className="card" key={index}>
            <h3>{step.title}</h3>
            <ul>
              {step.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;
