export const getValueThreekit =
  (nameText: string, attributes: any) => (namePropertyThreekit: string) => {
    const nameAttr = `${namePropertyThreekit}${nameText}`;
    const attribut = attributes[nameAttr];

    return attribut['value'];
  };

export const setValueThreekit =
  (nameText: string, setConfiguration: any) =>
  (namePropertyThreekit: string, value: any) => {
    const nameAttr = `${namePropertyThreekit}${nameText}`;
    return setConfiguration({ [nameAttr]: value });
  };
