import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card
      img='https://www.pngmart.com/files/8/Buttercup-Powerpuff-Girls-PNG-Photo-Image.png'
      title='Buttercup'
      description='Buttercup is described as a "tough hotheaded tomboy". Her personality ingredient is "spice", her signature color is green, and she has short black hair in a flip. She loves to get dirty, fights hard and plays rough; she does not plan and is all action. Her unique powers are curling her tongue, spinning into a tornado, and creating fireballs by rubbing her hands together until smoke comes out which forms a flaming ball that she throws at an opponent. McCracken originally wanted to name the character "Bud" until a friend suggested the name Buttercup.'
      />
      <Card
      img='https://www.pngmart.com/files/8/Blossom-Powerpuff-Girls-PNG-HD-Quality.png'
      title='Blossom'
      description='Blossom is the self-appointed leader of the Powerpuff Girls. Her personality ingredient is "everything nice", her signature color is pink, and she has long red-orange hair with a red bow. She was named for having spoken freely and honestly to the Professor shortly after her creation as shown in The Powerpuff Girls Movie. She is often seen as the most level-headed, and composed member of the group and also strong and determined. Her unique abilities include ice breath, microscopic vision, lightning bolts, and advanced intelligence; she is also an exceptional leader, master strategist, and apt planner.'
      />
      <Card
      img='https://www.pngmart.com/files/8/Bubbles-Powerpuff-Girls-PNG-Clipart-Background.png'
      title='Bubbles'
      description='Bubbles is the "softest and sweetest" of the three. Her personality ingredient is "sugar", her signature color is blue, and she has blonde hair in pigtails. Bubbles is seen as kind and very sweet but she is also capable of extreme rage and can fight monsters just as well as her sisters can. Her best friend is a stuffed octopus doll she calls "Octi", and she also loves animals. She exhibits the ability to both understand multiple languages and communicate with various animals; her unique powers are projecting powerful sonic screams, and creating a shockwave of thunder with a single clap from her hands.'
      />
    </div>
  );
}

export default App;
