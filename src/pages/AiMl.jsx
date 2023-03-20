import React from 'react';
// import { Link } from 'react-router-dom';
import 'react-tree-graph/dist/style.css'
import { AnimatedTree } from 'react-tree-graph';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
// import Banner from '../partials/Banner';

import companies from '../data/companies.json';
import categories from '../data/categories.json';
// import subcategories from '../data/subcategories.json';

function AiMl() {
  const treeData = categories.categories.map(function (category) {
    const allSubCategories = companies.companies
      .filter(company => company.Category === category.Name)
      .map(m => ({ name: m['Sub Category'] }));;

    const uniqueChildren = allSubCategories.filter((a, i) => allSubCategories.findIndex((s) => a.name === s.name) === i);

    return {
      name: category.Name,
      children: uniqueChildren
    };
  });

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

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">AI/ML Startup Landscape</h1>
                <p className="text-lg text-gray-400 text-center">Empowering the Future of Intelligence: Explore the Cutting-Edge AI/ML Startup Landscape with Us!</p>
              </div>

              <div className="custom-container">
                <AnimatedTree
                  data={data}
                  svgProps={{
                    className: 'custom'
                  }}
                  height={3000}
                  width={1400} />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* <Banner /> */}

    </div>
  );
}

export default AiMl;