import Button from "./components/Button/Button"
import Input from "./components/Input/Input";
function App() {

  return (
    <>
      <Button variant="primary" onClick={() => alert('Primary Button Clicked')}>
        Primary Button
      </Button>
      <Button variant="secondary" onClick={() => alert('Secondary Button Clicked')}>
        Secondary Button
      </Button>
      <Button variant="danger" onClick={() => alert('Danger Button Clicked')}>
        Danger Button
      </Button>
      <Button variant="success" onClick={() => alert('Success Button Clicked')}>
        Success Button
      </Button>
      <Button variant="link" onClick={() => alert('Link Button Clicked')}>
        Link Button
      </Button>
      <Input 
        labelText="Username"
        inputId="username"
        type="text"
        placeholderText="Enter your username"
        onChange={(value) => console.log(value)}
        value=""
        name="username"
        />
    </>
  )
}

export default App;
