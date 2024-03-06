import { useState } from 'react';
import CameraComponent from '../../components/Camera';
import ImageCropper from '../../components/ImageCropper';
import { useSelector, useDispatch } from 'react-redux';
import ImageEditor from '../../components/ImageEditor';
import { RootState } from '../../app/store';
import { createReport } from '../../redux/report/reportSlice';
import { useNavigate } from 'react-router-dom';

const CreateReport = () => {
  const [isWebCamOpen, setIsWebcamOpen] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [isEditor, setIsEditor] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { newReport } = useSelector((state: RootState) => state.report);

  const createNewReport = (file) => {
    setIsEditor(false);
    const payload = new FormData();
    const cb = () => {
      navigate(`/report/details/${newReport.insertId}`);
    };
    payload.append('image', file, file.name);
    dispatch(
      createReport({
        payload,
        cb,
      })
    );
  };

  return (
    <div className="m-6">
      {isWebCamOpen && (
        <CameraComponent
          setIsWebcamOpen={setIsWebcamOpen}
          setImageFile={setImageFile}
          setIsEditor={setIsEditor}
        />
      )}
      {isEditor && imageFile && !isWebCamOpen && (
        <ImageEditor imageFile={imageFile} createReport={createNewReport} />
      )}
    </div>
  );
};

export default CreateReport;
