import React from 'react';
import 'react-tree-graph/dist/style.css'
import { AnimatedTree } from 'react-tree-graph';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import companies from '../data/companies.json';
import categories from '../data/categories.json';
import subcategories from '../data/subcategories.json';

function Home() {

  const treeData = categories.categories.map(function(category) { 
    const allSubCategories = companies.companies
       .filter(company => company.Category === category.Name)
       .map(m => ({ name: m['Sub Category'] }));;

    const uniqueChildren = allSubCategories.filter((a, i) => allSubCategories.findIndex((s) => a.name === s.name) === i);

    return {
      name: category.Name,
      children: uniqueChildren
    };
  });

  console.log(JSON.stringify(treeData));

  const data = {
     name: 'AI/ML Landscape',
     children: treeData
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <div className="custom-container">
          <AnimatedTree
            data={data}
            svgProps={{
              className: 'custom'
            }}
            height={3000}
            width={1400}/>
        </div>
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;