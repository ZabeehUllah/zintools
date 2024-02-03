import React, { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import FromPdfSection from '../../molecules/fromPdfSection';
import ToolsLayout from '../../layout/ToolsLayout';
import ToPdfSection from '../../molecules/toPdfSection';
import { FromPdf, ToPdf } from '@/components/constants/data';

const ToolsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => [setShowAll((prev) => !prev)];

  return (
    <MainLayout>
      <ToolsLayout
        text={'Convert form PDF'}
        isPdfFrom={true}
        showAll={showAll}
        handleShowAll={handleShowAll}
      >
        {showAll ? <ToPdfSection data={FromPdf} /> : <FromPdfSection />}
      </ToolsLayout>

      <ToolsLayout text={'Convert to PDF'} isPdfFrom={false}>
        <ToPdfSection data={ToPdf} />
      </ToolsLayout>
    </MainLayout>
  );
};

export default ToolsSection;
