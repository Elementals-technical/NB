import s from './TransferDesign.module.scss';

export const TransferDesign = () => {
  return (
    <div className={s.wrap}>
      The transfer of a design to another product is accompanied by the transfer
      of the relevant components to the new facility.
      <strong>
        It should be noted that if the new object does not have the appropriate
        fields for customization, then these settings will not be transferred
      </strong>
    </div>
  );
};
