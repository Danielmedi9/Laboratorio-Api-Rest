import { css } from '@emotion/css';

export const pageContainer = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

export const card = css`
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const backIcon = css`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
  &:hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const content = css`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const media = css`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
`;

export const detailsContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 0.5rem;
`;

export const editIcon = css`
  position: absolute;
  top: 310px;
  right: 4px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
  &:hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;
