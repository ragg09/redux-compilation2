import Button from '@/shared/components/Button';
import Card from '@/shared/components/Card';
import Container from '@/shared/components/Container';
import Headings from '@/shared/components/Headings';

const DemoTester: React.FC = () => {
  return (
    <Container>
      <Headings option="h6" text="This Page is meant to demonstrate all the avaialble components" />
      <p className="mb-4">All Reusable components are located at `../shared/components/`</p>

      <Card>
        <Headings option="h6" text="Card" />
        <p>This is a card component example</p>
        <p>This whole page also uses Navbar and Container</p>
      </Card>

      <Card>
        <Headings option="h6" text="Buttons" />
        <Card>
          <Button text="Primary Button" />
          <p>Button Component can change backgournd and text color</p>
          <Button text="Other Button" bgColor="green" textColor="black" />
          <p>Can also use onclick event</p>
          <Button
            text="Open Alert"
            onClick={() => {
              alert('Button Clicked');
            }}
          />
        </Card>
      </Card>

      <Card>
        <Headings option="h6" text="Headings" />
        <p className="mb-2">Headings can use h1 - h6</p>
        <Card>
          <Headings option="h1" text="h1 text" />
          <Headings option="h2" text="h2 text" />
          <Headings option="h3" text="h3 text" />
          <Headings option="h4" text="h4 text" />
          <Headings option="h5" text="h5 text" />
          <Headings option="h6" text="h6 text" />
        </Card>
      </Card>

      <Card>
        <Headings option="h6" text="Modal" />
        <p className="mb-2">
          Modal Must have separate button to control the visibility, it is advisable to put the
          modal and button to its specific section for maintainability
        </p>
        <Card>. . . Modal demo Here</Card>
      </Card>
    </Container>
  );
};

export default DemoTester;
