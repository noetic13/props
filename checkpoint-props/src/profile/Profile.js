import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({fullName , bio , profession , children , handleName}) => {
    const style = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
        },
        fullName: {
          fontSize: 32,
          fontWeight: 'bold',
          margin: 0,
          cursor: 'pointer',
        },
        bio: {
          fontSize: 18,
          fontStyle: 'italic',
          margin: 10,
        },
        profession: {
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        },
        avatar: {
          width: 150,
          height: 150,
          borderRadius: '50%',
          objectFit: 'cover',
        },
      };
    return (
        <div style={style.container}>
        {children}
        <h2 style={style.fullName} onClick={() => handleName(fullName)}>
          {fullName}
        </h2>
        <p style={style.bio}>{bio}</p>
        <p style={style.profession}>{profession}</p>
      </div>
    );
  };
  
  Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func.isRequired,
  };
  
  Profile.defaultProps = {
    fullName: 'Lil Peep',
    bio: 'No bio available.',
    profession: 'Unknown profession',
    children: <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="avatar" />,
    handleName: (name) => alert(`Hello, my name is ${name}`),
  };


export default Profile;
