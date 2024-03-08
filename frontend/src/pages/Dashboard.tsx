import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { StyledDashboard } from '../styles/Dashboard.styled';
import { RootState } from '../app/store';
import { deleteReport, getAllReports } from '../redux/report/reportSlice';
import Pagination from '../components/pagination';
import ConfirmMessage from '../utils/confirmModel';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { reportList, reportPagination, isCreateLoading, isLoading } = useSelector(
    (state: RootState) => state.report
  );

  const onCreate = () => {
    navigate('/report/create');
  };

  const paginationChange = async (e: Record<string, any>) => {
    getReports(e.selected + 1);
  };
  const getReports = (page: number = 1) => {
    dispatch(
      getAllReports({
        searchPage: page,
        searchQuery: '',
      })
    );
  };

  const onItemDelete = (event, id) => {
    event.stopPropagation();
    dispatch(
      deleteReport({
        cb: () => getReports(),
        reportId: id,
      })
    );
  };

  const viewReport = (event, id) => {
    event.stopPropagation();
    navigate(`/report/details/${id}`);
    // TODO get report and download
  };
  const deleteItem = async (e: SyntheticEvent, item: Record<string, any>) => {
    e.stopPropagation();
    const confirm = await ConfirmMessage('you want to delete?');
    if (confirm.isConfirmed) {
      onItemDelete(e, item?.id);
    }
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <StyledDashboard>
      <div className="wrapper">
        {!isCreateLoading && !isLoading ? (
          <button className="create create-btn" onClick={onCreate}>
            Create
          </button>
        ) : null}
        {reportList.length > 0 &&
          reportList?.map((item) => (
            <div
              key={item?.id}
              className="item cursor-none"
              onClick={(e) => viewReport(e, item?.id)}
            >
              <div> {item?.report_name} </div>
              <div className="item-actions">
                <button
                  onClick={(e) => viewReport(e, item?.id)}
                  className="action-icon"
                  title="View Report"
                >
                  <FaEye />
                </button>
                <button
                  onClick={(e) => deleteItem(e, item)}
                  className="action-icon delete-icon"
                  title="Delete Report"
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          ))}
      </div>
      {reportList.length > 0 && (
        <Pagination pageCount={reportPagination?.total_pages} handlePageClick={paginationChange} />
      )}

      {reportList.length <= 0 && (
        <div className="text-center font-bold italic text-xl mt-12">
          Create report to view the list.
        </div>
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
