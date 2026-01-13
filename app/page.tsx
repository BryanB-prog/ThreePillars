// app/page.tsx
import React from 'react';
import Image from 'next/image';
import { Card } from "@/components/Card";


const HomePage: React.FC = () => {
  return (
    <div className="max-h-screen  flex flex-col items-center justify-start p-4">
      <section className="p-6 rounded-lg shadow-lg">
       
        <p className="text-gray-500">
         Hi, I’m Bryan. I’m a data scientist with an experienced background in IT. I use science to help understand complex, human-centered problems.
         <p></p> This site reflects how I use data, the scientific method, and humanist values to help make the world a better place.

        </p>
      </section>
      <div className="mb-2">
  ...
</div>

      
          <header className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-800">Three Pillars</h1>
        
               <Image 
      src="/logo1.png" 
      alt="Logo" 
      width={200} 
      height={200} 
    />     

    {/* Right: Menu */}
      <nav className="flex items-center gap-6 text-gray-700">
        <a href="#projects" className="hover:text-gray-900">
          Projects
        </a>
        <a href="/resume" className="hover:text-gray-900">
          Resume
        </a>
        <a href="#about" className="hover:text-gray-900">
          About
        </a>
      </nav>

      </header>
      
      
      {
      /* You can add sections for Projects, Contact, etc. here */
      <section> 
<div className="grid gap-6 md:grid-cols-3">
  <Card title="Precision">              

  <h3 class="text-lg font-semibold mb-2">Precision</h3>
  <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
    <li><strong>Probability theory & statistical foundations</strong> – Random variables, distributions, sampling, and uncertainty</li>
    <li><strong>Statistical inference</strong> – Estimation, hypothesis testing, confidence intervals, and power analysis</li>
    <li><strong>Regression & classification models</strong> – Linear and logistic regression, assumptions, and interpretability</li>
    <li><strong>Model evaluation & validation</strong> – Bias–variance tradeoff, cross-validation, and performance metrics</li>
    <li><strong>Experimental design & causal reasoning</strong> – A/B testing, confounding, and observational vs. experimental analysis</li>
    <li><strong>Data cleaning & preprocessing</strong> – Data quality assessment, transformations, and reproducible pipelines</li>
    <li><strong>Feature engineering</strong> – Scaling, encoding, interactions, and domain-informed feature creation</li>
    <li><strong>Exploratory Data Analysis (EDA)</strong> – Statistical summaries, visualization, and pattern discovery</li>
    <li><strong>Missing data & outlier handling</strong> – Robust methods, imputation strategies, and sensitivity analysis</li>
    <li><strong>Uncertainty & result reliability</strong> – Error analysis, reproducibility, and practical vs. statistical significance</li>
  </ul>
        
  </Card>

  <Card title="Development">
    <ul className="list-disc pl-5 space-y-1">
      <li>Supervised learning (classification & regression)</li>
      <li>Unsupervised learning (clustering, dimensionality reduction)</li>
      <li>Tree-based methods (Random Forests, Gradient Boosting)</li>
      <li>Model selection and cross-validation</li>
      <li>Optimization methods and loss functions</li>
      <li>Deep Learning</li>
      <li>Algorithmic thinking and complexity analysis</li>
      <li>Data structures (trees, graphs, hashing)</li>
    </ul>
  </Card>

  <Card title="Integration">
    <ul className="list-disc pl-5 space-y-1">
      <li>SQL and relational database design</li>
      <li>Data pipelines and reproducible workflows</li>
      <li>Version control (Git/GitHub)</li>
      <li>Ethical and responsible data practices</li>
      <li>Interpretability and explainability</li>
      <li>Translating technical results for non-technical audiences</li>
        <li>Deployment awareness (APIs, cloud basics, static sites)</li>
    </ul>
  </Card>
</div>

<div className="grid gap-6 md:grid-cols-3">
        <div className="mt-4 flex items-center justify-center">
    <Image
      src="/precision1.png"
      alt="Food prices versus minimum wage trend in Canada"
      width={200}
      height={250}
     className="rounded-md opacity-100"
    />
    
  </div>
<div className="mt-4 flex items-center justify-center">
    <Image
      src="/development1.png"
      alt="Food prices versus minimum wage trend in Canada"
      width={200}
      height={250}
      className="rounded-md opacity-90"
    />
  </div>
<div className="mt-4 flex items-center justify-center">
    <Image
      src="/integration2.png"
      alt="Food prices versus minimum wage trend in Canada"
      width={200}
      height={250}
      className="rounded-md opacity-90"
    />
  </div>

</div>



      </section>
      


      
      }
    </div>
  );
};

export default HomePage;






