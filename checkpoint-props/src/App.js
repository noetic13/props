import Profile from './profile/Profile';
import './App.css';

function App() {
  const handleName = (name) => {
    alert(`You clicked on ${name}'s name!`);
  };
  const styles = {
    
      width: 150,
      height: 150,
      borderRadius: '30%',
      objectFit: 'cover',
    }
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          fullName="Moemen Saied"
          bio="I am a web developer"
          profession="Web Developer"
          handleName={handleName}>
          <img src ="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt = "avatar" style={styles}/>

        </Profile>
      </header>
    </div>
  );
}

export default App;
