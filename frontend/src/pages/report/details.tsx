import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReportById } from '../../redux/report/reportSlice';
import { RootState } from '../../app/store';
import ReportPdf from '../../components/ReportPdf';

const ReportDetails = () => {
  const dispatch = useDispatch();
  const { reportData } = useSelector((state: RootState) => state.report);
  const { id } = useParams();
  console.log(reportData);

  useEffect(() => {
    if (id) dispatch(getReportById(id));
  }, [id, dispatch]);

  return (
    <div>
      <ReportPdf name={reportData?.report_name} imageUrl={reportData?.image_url} />
      {/* <ReportLoader /> */}
    </div>
  );
};

export default ReportDetails;
