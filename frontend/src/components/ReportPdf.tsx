import { usePDF } from 'react-to-pdf';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { StyledDashboard } from '../styles/Dashboard.styled';

const ReportPdf = ({ name, imageUrl }) => {
  const { toPDF, targetRef } = usePDF({ filename: `${name}.pdf` });
  const navigate = useNavigate();

  const onDownload = () => {
    toPDF();
  };
  return (
    <StyledDashboard>
      <div className="flex items-center gap-1 m-8 justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div role="presentation" className="text-xl">
            <IoIosArrowBack />
          </div>
          <h1 className="font-semibold text-xl">Report</h1>
        </div>
        <button className="create create-btn" onClick={onDownload}>
          Download
        </button>
      </div>
      <div ref={targetRef} className="flex flex-col gap-10 justify-center w-screen items-center">
        <div className="mt-5 text-3xl">{name}</div>
        <img width={300} height={300} src={imageUrl} alt={name} />
        <br />
      </div>
    </StyledDashboard>
  );
};

export default ReportPdf;
