import React, { SyntheticEvent } from 'react';
import { StyledTable } from '../styles/Table.styled';
import * as moment from 'moment-timezone';
import convertUtcToIst from '../utils/convertUtcToIst';

interface TableAction {
  onClick: (event: SyntheticEvent, id: string) => void;
  className: string;
  title: string;
  icon: React.ReactNode;
}

interface TableRow {
  id: string;
  name: string;
  createdAt: string;
}

interface TableProps {
  title: string;
  columns: string[];
  columnsToShow: string[];
  rows: TableRow[];
  actions?: TableAction[];
  onRowClick: (event: SyntheticEvent, id: string) => void;
}

function isValidDateString(dateString: string): boolean {
  const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
  return dateFormat.test(dateString);
}

const Table: React.FC<TableProps> = (props) => {
  const { title, columns, columnsToShow, rows, actions, onRowClick } = props;

  return (
    <StyledTable>
      <div className="table-wrapper">
        <div className="table-title">{title}</div>
        <table className="rwd-table">
          <tbody>
            <tr>
              {columns?.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
              {actions?.length > 0 && <th>Actions</th>}
            </tr>
            {rows?.map((row, index) => (
              <tr
                key={index}
                onClick={(event) => onRowClick(event, row?.id)}
                className="cursor-pointer"
              >
                {Object.keys(row)?.map(
                  (item, itemIndex) =>
                    columnsToShow?.includes(item) && (
                      <td key={itemIndex} data-th={item}>
                        {isValidDateString(row[item]) ? convertUtcToIst(row[item]) : row[item]}
                      </td>
                    )
                )}
                <td key={index} data-th="Action" className="table-actions">
                  {actions?.map((action, index) => (
                    <button
                      onClick={(event) => action?.onClick(event, row?.id)}
                      className={`action-icon ${action?.className}`}
                      title={action.title}
                    >
                      {action?.icon}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StyledTable>
  );
};

export default Table;
