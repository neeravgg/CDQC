import styled from "styled-components";

export const StyledDashboard = styled.div`
  * {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  .hidden {
    display: none;
  }

  .red {
    color: #990000;
  }

  .half-opacity {
    fill-opacity: 0.5;
  }

  .full-opacity {
    fill-opacity: 1;
  }

  .art {
    max-width: 100%;
    max-height: 100%;
  }

  .wrapper {
    padding: 1.5rem;
  }

  .create {
    margin-bottom: 1rem;
    text-align: center;
    width: 120px;
    height: 40px;
    padding: 4px 8px;
    border: 2px solid #000;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  .create-btn {
    background: #000;
    color: #fff;
    line-height: 42px;
    padding: 0;
    border: none;
  }
  .create-btn:hover {
    background: transparent;
    color: #000;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
  .create-btn:before,
  .create-btn:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #000;
    transition: 400ms ease all;
  }
  .create-btn:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  .create-btn:hover:before,
  .create-btn:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }

  .item {
    cursor: pointer;
    background: #fff;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 8px 12px;
    font-size: 14px;
    margin-bottom: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
  }

  .item-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .action-icon {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.7) !important;
    cursor: pointer;
    border: unset;
  }

  .delete-icon {
    svg {
      color: red !important;
    }
  }

  .camera {
    position: "absolute";
    bottom: 10%;
  }
`;
