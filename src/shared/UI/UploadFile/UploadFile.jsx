import { useRef, useState } from 'react';
import s from './UploadFile.module.scss';
import { FormField, ImagePreview, UploadFileBtn } from './file-upload.styles';
import { Trash } from '../../assets/svg/trash';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

export const UploadFile = ({
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState();

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size < maxFileSizeInBytes) {
        return { file };
      }
    }
    return { ...newFiles };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);

    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFile } = e.target;

    if (newFile.length) {
      let updatedFiles = addNewFiles(newFile);

      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = () => {
    setFiles(undefined);
    callUpdateFilesCb({});
  };

  return (
    <>
      <div className={s.wrap}>
        <div className={s.header}>
          <div className={s.title}>
            <div className={s.name}>Upload graphic</div>
            {files !== undefined && (
              <div className={s.fileName}>{files.name}</div>
            )}
          </div>
          {files !== undefined && (
            <div onClick={() => removeFile()} className={s.remove}>
              <div className={s.icon}>
                <Trash />
              </div>
              <div className={s.text}>Delete</div>
            </div>
          )}
        </div>
        <div className={s.main}>
          <div className={s.fileUploadContainer}>
            {files === undefined && (
              <div className={s.uploadContaiter}>
                <img src="images/loadFile.svg" alt="" />
                <div className={s.nameBtn}>
                  Drag & Drop or
                  <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
                    Choose graphic
                  </UploadFileBtn>
                  to upload
                </div>

                <div className={s.labelText}>JPG, PNG, SVG, EPS, PDF</div>

                <FormField
                  type="file"
                  ref={fileInputField}
                  onChange={handleNewFileUpload}
                  value=""
                />
              </div>
            )}
            {files &&
              files['file'] !== undefined &&
              files['file'].type.split('/')[0] === 'image' && (
                <ImagePreview
                  src={URL.createObjectURL(files['file'])}
                  alt="logo"
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
};
