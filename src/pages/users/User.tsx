import { MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import Layout from '../../components/layout/Layout';
import { Image } from 'semantic-ui-react';

type Props = {};

const User = (props: Props) => {
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

        {/* Data */}
        <MDBRow className="photo-row justify-content-center">
          <MDBCol md="6" lg="5" xl="7" className="mt-5">
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">İsim</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">Role</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">1</th>
                  <td>Tobeto</td>
                  <td>tobeto@gmail.com</td>
                  <td>User</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Esra Akbulut</td>
                  <td>esra@gmail.com</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Abdulkadir Aydemir</td>
                  <td>aydemir@gmail.com</td>
                  <td>Admin</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default User;
