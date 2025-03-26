import PropTypes from 'prop-types';


function Profile(prop)
{
  return(
    <>
    <h4>Name:{prop.name}</h4>
    <h4>Age:{prop.age}</h4>
    <h4>Status: {prop.isMember?"Active Member":"Guest"}</h4>
    <h4>Hobbies</h4>
    <ul>
      {
        prop.hobbies.map((hobby,index)=>
        {
           return <li key={index} onClick={()=>prop.onHobbyClick(hobby)}>{hobby} </li>;
        })
      }
    </ul>



    </>
  )
}


Profile.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isMember:PropTypes.bool,

};
export default Profile;