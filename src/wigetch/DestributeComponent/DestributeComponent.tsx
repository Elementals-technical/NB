import React, { useId } from 'react';
import { ListColor } from '../../shared/UI/ListColor/ListColor';
import { TabComponent } from '../../shared/UI/TabComponent/TabComponent';

export const DestributeComponent = (props: any) => {
  const { type, data } = props;

  switch (type) {
    case 'ListColor': {
      return <ListColor key={useId()} {...props} {...data} />;
    }
    case 'TabContainer': {
      return <TabComponent data={data} {...props} />;
    }

    default:
      return <div>default </div>;
  }
};
