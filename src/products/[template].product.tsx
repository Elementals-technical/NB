import {
  ProductLayout,
  Player,
  PortalToElement,
  FlatForm,
} from '@threekit-tools/treble';

const products = {
  'product-identifier': {
    preview: { assetId: '0d976533-a811-42aa-90c3-4bda417fee2d' },
  },
};

export default function Product() {
  return (
    <ProductLayout products={products}>
      <div className="tk-treble-player">
        <Player />
      </div>
      <PortalToElement to="tk-treble-form" strict={true}>
        <FlatForm />
      </PortalToElement>
    </ProductLayout>
  );
}
