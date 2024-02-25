import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';
import Layout from '../../components/layout/Layout';
import { Image } from 'semantic-ui-react';
import './carPage.css';

type Props = {};

const CarPage = (props: Props) => {
  return (
    <Layout>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="photo-row justify-content-center">
          <MDBCol md="6" lg="5" xl="8" className="mt-5">
            <Image
              src="/images/rent-a-car-logo3.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBCol>
        </MDBRow>

        {/*Brand - Model - Color*/}

        <MDBRow className="photo-row justify-content-center my-2">
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-brand"
              wrapperClass="mb-4"
              label="Marka Adı"
              type="text"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Model Adı"
              type="text"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Model Rengi"
              type="text"
              size="lg"
            />
          </MDBCol>
        </MDBRow>

        {/*Kilometre - Year - Plate*/}

        <MDBRow className="photo-row justify-content-center my-2">
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Kilometre"
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Model Yılı"
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Plaka"
              type="text"
              size="lg"
            />
          </MDBCol>
        </MDBRow>

        {/*Fuel - Gear - Case*/}

        <MDBRow className="photo-row justify-content-center my-2">
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Yakıt Tipi"
              type="text"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Vites Tipi"
              type="text"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Kasa Tipi"
              type="text"
              size="lg"
            />
          </MDBCol>
        </MDBRow>

        {/*Trunk Volume - Capacity - Daily Price*/}

        <MDBRow className="photo-row justify-content-center my-2">
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Bagaj Hacmi"
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Araç Kapasitesi"
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Günlük Ücret"
              type="number"
              size="lg"
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className="photo-row justify-content-center my-3">
          <MDBCol md="6" lg="5" xl="6">
            <MDBBtn
              style={{ backgroundColor: '#E44A48' }}
              className="mb-4 w-100"
              size="lg">
              Aracı Kaydet
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default CarPage;
