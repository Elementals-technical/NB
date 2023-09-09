import React, { useId, useState } from 'react';
import s from './TabComponent.module.scss';

import { LineParam } from '../LineParam/LineParam';
import { ListColor } from '../ListColor/ListColor';

const checkIsActiveSection = (activeSectionId: string, sectionId: string) =>
  sectionId.includes(`#${activeSectionId}#`);

export const TabComponent = ({ data }: any) => {
  const [selectedSectionID, setSectionID] = useState(
    data['headerComponent']['data']['values'][0]['value']
  );

  const sections = data['sectionsComponent'];

  const selectedSection = (id: string) => {
    setSectionID(id);
  };

  return (
    <div className={s.tabcomponent}>
      <div className={s.header}>
        <LineParam
          key={useId()}
          name={data['headerComponent']['data']['label']}
          values={data['headerComponent']['data']['values']}
          isSelectedId={selectedSectionID}
          //@ts-ignore
          onClickBtn={(value: any) => {
            selectedSection(value['value']);
          }}
        />
      </div>
      <div className={s.main}>
        {sections.map((section: any) => {
          if (!checkIsActiveSection(selectedSectionID, section['data']['id']))
            return <></>;

          return (
            <ListColor
              key={useId()}
              name={section['data']['label']}
              values={section['data']['values']}
              //@ts-ignore
              onClickBtn={(value: any) => {
                // console.log(value);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
