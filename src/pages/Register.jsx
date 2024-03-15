import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import Section from 'components/Section/Section';
import MainHeading from 'components/MainHeading/MainHeading';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <MainHeading $visuallyhidden="true">Register</MainHeading>
      <Section>
        <RegisterForm />
      </Section>
    </div>
  );
}
