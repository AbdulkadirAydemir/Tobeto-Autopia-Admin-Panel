import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Layout from '../../components/layout/Layout';
import { loginRequest } from '../../models/requests/login/loginRequest';
import authService from '../../services/authService';
import tokenService from '../../services/tokenService';
import { clearAccessToken, setAccessToken } from '../../store/auth/authSlice';
import './login.css';

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>();

  const token = useSelector((state: any) => state.auth.accessToken);

  const postData: loginRequest = {
    email: email,
    password: password,
  };

  useEffect(() => {
  
  }, [token]);

  const login = () => {
    authService
      .login(postData)
      .then((response) => {
        dispatch(setAccessToken(postData.email));
        console.log(response.data);
        tokenService.setToken(response.data);
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError('Kayıtlı Kullanıcı Bulunamadı');
          dispatch(clearAccessToken());
        } else if (error.response && error.response.status === 401) {
          setError('Yetkisiz erişim. Lütfen giriş yapın.');
          dispatch(clearAccessToken());
        } else {
          setError(
            'Kayıtlı Kullanıcı Bulunamadı. E-mail ve Şifrenizi Kontrol Edin'
          );
          dispatch(clearAccessToken());
        }
      });
  };
  return (
    <Layout>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6" lg="5" xl="8" className="mt-5">
            <Image
              src="/images/rent-a-car-logo3.jpg"
              className="img-fluid"
              alt=""
            />
          </MDBCol>

          <MDBCol md="6" lg="5" xl="5" style={{ marginTop: 20 }}>
            <MDBInput
              className="Input-email"
              wrapperClass="mb-4"
              label="Email address"
              id="email"
              type="email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <MDBInput
              className="Input-password"
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />

            {error && (
              <p
                style={{
                  color: '#E44A48',
                  fontFamily: 'Chakra Petch',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {error}
              </p>
            )}

            <MDBBtn
              style={{ backgroundColor: '#E44A48' }}
              className="mb-4 w-100"
              size="lg"
              onClick={() => {
                login();
              }}>
              Log in
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default Login;
