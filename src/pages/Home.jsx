import MainHeading from 'components/MainHeading/MainHeading';
import MainHeadingContainer from 'components/MainHeadingContainer/MainHeadingContainer';

export default function Home() {
  return (
    <>
      <MainHeadingContainer>
        <MainHeading>
          Phonebook welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </MainHeading>
      </MainHeadingContainer>
    </>
  );
}
