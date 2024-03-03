import { MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit"
import Layout from "../../components/layout/Layout"
import { Image } from "semantic-ui-react"

type Props = {}

const Rental = (props: Props) => {
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

        {/* Kiralamalar */}
        <MDBRow className="photo-row justify-content-center">
          <MDBCol md="6" lg="5" xl="7" className="mt-5">
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Return Date</th>
                  <th scope="col">Araç ID</th>
                  <th scope="col">Kullanıcı ID</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">1</th>
                  <td>25.02.2024</td>
                  <td>03.03.2024</td>
                  <td></td>
                  <td>12</td>
                  <td>5</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
    </Layout>
  )
}

export default Rental