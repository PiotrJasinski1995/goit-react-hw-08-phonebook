import { Helmet } from 'react-helmet';
import LoginForm from '../components/LoginForm/LoginForm';
import Section from 'components/Section/Section';
import MainHeading from 'components/MainHeading/MainHeading';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <MainHeading $visuallyhidden="true">Login</MainHeading>
      <Section>
        <LoginForm />
      </Section>
    </div>
  );
}
