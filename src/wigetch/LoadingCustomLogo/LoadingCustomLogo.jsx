import { useRef, useState } from 'react';
import s from './LoadingCustomLogo.module.scss';
import { FormField, ImagePreview, UploadFileBtn } from './file-upload.styles';
import { ViewLoadImg } from '../../shared/UI/BaseComponent/ViewLoadImg/ViewLoadImg';
import { useSelector } from 'react-redux';
import { getLoadersName } from '../../shared/function/providers/redax/selectore';
import { LoaderWrap } from '../../shared/UI/LoaderWrap.tsx/LoaderWrap';
import { useDispatch } from 'react-redux';
import {
  seLoadCustomImg,
  setCurentLayer,
  setThreekitAttribute,
} from '../../shared/function/providers/redax/action';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

export const LoadingCustomLogo = ({
  removeThreekit,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState();
  const dispatch = useDispatch();

  const loadCustomImg = useSelector(getLoadersName('loadCustomImg'));
  const handleUploadBtnClick = () => {
    console.log('handleUploadBtnClick', handleUploadBtnClick);
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
    console.log('files', files);
    const filesAsArray = convertNestedObjectToArray(files);
    console.log('filesAsArray', filesAsArray);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    dispatch(setThreekitAttribute(true));
    dispatch(seLoadCustomImg(true));

    //@ts-ignore
    console.log('= e.target;', e.target.files);
    const { files: newFile } = e.target;

    if (newFile.length) {
      let updatedFiles = addNewFiles(newFile);
      dispatch(
        setCurentLayer({
          type: 'upload-graphic',
        })
      );
      setFiles(updatedFiles);

      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = () => {
    setFiles(undefined);
    callUpdateFilesCb({});
    removeThreekit();
  };

  return (
    <>
      <div className={s.wrap}>
        {!loadCustomImg && files === undefined && (
          <>
            <div className={s.header}>
              <div className={s.title}>
                <div className={s.name}>Upload graphic</div>
              </div>
            </div>
            <div className={s.main}>
              <div
                className={s.fileUploadContainer}
                onClick={() => handleUploadBtnClick}
              >
                <div className={s.uploadContaiter}>
                  <img src="/images/loadFile.svg" alt="" />
                  <div className={s.nameBtn}>
                    Drag & Drop or
                    <UploadFileBtn>Choose graphic</UploadFileBtn>
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
              </div>
            </div>
          </>
        )}

        {loadCustomImg && (
          <ViewLoadImg
            name={''}
            typeLoad={'Upload graphic'}
            removeFile={() => {}}
            content={
              <>
                <LoaderWrap />
              </>
            }
          />
        )}

        {!loadCustomImg &&
          files &&
          files['file'] !== undefined &&
          files['file'].type.split('/')[0] === 'image' && (
            <ViewLoadImg
              typeLoad={'Upload graphic'}
              name={files.name}
              removeFile={() => removeFile()}
              content={
                <ImagePreview
                  src={URL.createObjectURL(files['file'])}
                  alt="logo"
                />
              }
            ></ViewLoadImg>
          )}
      </div>
    </>
  );
};
