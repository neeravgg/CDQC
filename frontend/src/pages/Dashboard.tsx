import { SyntheticEvent, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { StyledDashboard } from '../styles/Dashboard.styled';
import { RootState } from '../app/store';
import { deleteReport, getAllReports } from '../redux/report/reportSlice';
import ConfirmMessage from '../utils/confirmModel';
import Table from '../components/Table';
import Pagination from '../components/TablePagination';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { reportList, reportPagination, isCreateLoading, isLoading } = useSelector(
    (state: RootState) => state.report
  );

  const paginationChange = async (e: Record<string, any>) => {
    getReports(e.selected + 1);
  };
  const getReports = useCallback(
    (page: number = 1) => {
      dispatch(
        getAllReports({
          searchPage: page,
          searchQuery: '',
        })
      );
    },
    [dispatch]
  );

  const onCreate = () => {
    navigate('/report/create');
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
  };

  const deleteItem = async (e: SyntheticEvent, item: Record<string, any>) => {
    e.stopPropagation();
    const confirm = await ConfirmMessage('you want to delete?');
    if (confirm.isConfirmed) {
      onItemDelete(e, item?.id);
    }
  };

  const reportActions = [
    {
      title: 'View Report',
      onClick: (e, id) => viewReport(e, id),
      className: '',
      icon: <FaEye />,
    },
    {
      title: 'Delete Report',
      onClick: (e, id) => deleteItem(e, id),
      className: 'delete-icon',
      icon: <MdDeleteForever />,
    },
  ];

  useEffect(() => {
    getReports();
  }, [getReports]);

  return (
    <StyledDashboard>
      <div className="wrapper">
        {!isCreateLoading && !isLoading ? (
          <button className="create create-btn" onClick={onCreate}>
            Create
          </button>
        ) : null}
        {reportList?.length > 0 && (
          <Table
            title="All Reports"
            columnsToShow={['report_name', 'created_at']}
            columns={['Name', 'Created At']}
            rows={reportList}
            actions={reportActions}
            onRowClick={(e, id) => viewReport(e, id)}
          />
        )}
      </div>
      {reportList.length > 0 && (
        <Pagination pageCount={reportPagination?.total_pages} handlePageClick={paginationChange} />
      )}

      {reportList.length <= 0 && (
        <div className="flex flex-col justify-center items-center w-full no-results">
          <img width="96" height="96" alt="no-results" src="/no-results.png" />
          <div className="font-bold italic text-xl mt-6">No reports to display, create them!</div>
        </div>
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
