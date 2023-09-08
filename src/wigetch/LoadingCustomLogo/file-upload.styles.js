import styled from 'styled-components';

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  color: #7d7d8a;
  text-align: center;
  font-family: Proxima Nova;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DragDropText = styled.div`
  display: flex;
  align-items: center;
  color: #161516;
  text-align: center;
  font-family: 'Proxima Nova';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 15px 0;
`;

export const UploadFileBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #cf202e;
  font-family: Proxima Nova;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  padding: 0 5px;
  cursor: pointer;

  &:hover {
    color: #fff;
    outline: 0;
    background: transparent;

    &:after {
      width: 110%;
    }
  }

  &:focus {
    outline: 0;
    background: transparent;
  }

  &:disabled {
    opacity: 0.4;
    filter: grayscale(100%);
    pointer-events: none;
  }
`;

export const PreviewContainer = styled.section`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagePreview = styled.img`
  border-radius: 6px;
  width: auto;
  height: 100%;
`;
