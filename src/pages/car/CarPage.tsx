import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBFile,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';
import Layout from '../../components/layout/Layout';
import { Image } from 'semantic-ui-react';
import './carPage.css';
import { AddCarRequest } from '../../models/requests/car/addCarRequest';
import { useState } from 'react';
import carService from '../../services/carService';

type Props = {};

const CarPage = (props: Props) => {
  const [kilometer, setKilometer] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [plate, setPlate] = useState<string>('');
  const [dailyPrice, setDailyPrice] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [minFindeksRate, setMinFindeksRate] = useState<number>(0);
  const [trunkVolume, setTrunkVolume] = useState<number>(0);
  const [capacity, setCapacity] = useState<number>(0);
  const [caseType, setCaseType] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");
  const [gearType, setGearType] = useState<string>("");
  const [modelId, setModelId] = useState<number>(0);
  const [colorId, setColorId] = useState<number>(0);

  const postData: AddCarRequest = {
    kilometer: kilometer,
    year: year,
    plate: plate,
    dailyPrice: dailyPrice,
    file: file,
    minFindeksRate: minFindeksRate,
    trunkVolume: trunkVolume,
    capacity: capacity,
    caseType: caseType,
    fuelType: fuelType,
    gearType: gearType,
    modelId: modelId,
    colorId: colorId,
  };

  const addCar = () =>{
    carService.addCar(postData).then(res=>{
      console.log(res.data)
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
        setFile(selectedFile);
    } else {
        console.error("Dosya seçilmedi veya seçim iptal edildi.");
    }
};

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
              label="Marka Adı Id"
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Model Adı Id"
              value={modelId}
              onChange={(e) => setModelId(parseInt(e.target.value))}
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Model Renk Id"
              value={colorId}
              onChange={(e) => setColorId(parseInt(e.target.value))}
              type="number"
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
              value={kilometer}
              onChange={(e) => setKilometer(parseInt(e.target.value))}
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Model Yılı"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Plaka"
              value={plate}
              onChange={(e) => setPlate((e.target.value))}
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
              value={fuelType}
              onChange={(e) => setFuelType((e.target.value))}
              type="text"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Vites Tipi"
              value={gearType}
              onChange={(e) => setGearType((e.target.value))}
              type="text"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Kasa Tipi"
              value={caseType}
              onChange={(e) => setCaseType((e.target.value))}
              type="text"
              size="lg"
            />
          </MDBCol>
        </MDBRow>

        {/*Findex Rate - Tax Rate - Car Status*/}

        <MDBRow className="photo-row justify-content-center my-2">
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Findex Oranı"
              value={minFindeksRate}
              onChange={(e) => setMinFindeksRate(parseInt(e.target.value))}
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Vergi Oranı"
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Araç Durumu"
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
              value={trunkVolume}
              onChange={(e) => setTrunkVolume(parseInt(e.target.value))}
              type="number"
              size="lg"
            />
          </MDBCol>
          <MDBCol md="6" lg="5" xl="2">
            <MDBInput
              className="input-model"
              wrapperClass="mb-4"
              label="Araç Kapasitesi"
              value={capacity}
              onChange={(e) => setCapacity(parseInt(e.target.value))}
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
            <MDBFile
              label="Araç Fotoğrafı Seçin"
              id="customFile"
              onChange={handleFileChange}
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className="photo-row justify-content-center my-3">
          <MDBCol md="6" lg="5" xl="6">
            <MDBBtn
              style={{ backgroundColor: '#E44A48' }}
              className="mb-4 w-100"
              size="lg"
              onClick={addCar}>
              Aracı Kaydet
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default CarPage;
