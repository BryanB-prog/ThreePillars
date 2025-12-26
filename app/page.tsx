// app/page.tsx
import React from 'react';
import Image from 'next/image';
import { Card } from "@/components/Card";


const HomePage: React.FC = () => {
  return (
    <div className="max-h-screen  flex flex-col items-center justify-center p-4">
      <section className="p-6 rounded-lg shadow-lg">
       
        <p className="text-gray-500">
         Hi, my name is Bryan. I'm a veteran IT professional and recent Data Science grad (Master of Science in Data Science) and this is my website.
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
    <ul className="list-disc pl-5 space-y-1">
      
   <li>Probability theory and statistical inference
</li> 
<li>Linear & logistic regression</li>
<li>Hypothesis testing and confidence intervals</li>
<li>Bias Variance tradeoff and model evaluation</li>
<li>Experimental design and causal reasoning</li>
<li>Data cleaning, preprocessing, and feature engineering</li>
<li>Exploratory Data Analysis (EDA)</li>
<li>Handling missing data and outliers</li>


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
