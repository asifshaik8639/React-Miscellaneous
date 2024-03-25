import { getImageUrl } from './utils.js';

function Profile({
    name,
    imageId, 
    altName,
    width,
    height,
    profession,
    awards,
    achievements,
    discovered  }) {

    return(
        <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl({imageId})}
          alt={altName}
          width={width}
          height={height}
        />
        <ul>
          <li>
            <b>Profession: </b> 
                {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
                ({achievements})
          </li>
          <li>
            <b>Discovered: </b>
                {discovered}
          </li>
        </ul>
      </section>
    );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
      name="test"
      imageId= ""
      altName= ""
      width= ""
      height= ""
      profession= ""
      awards= ""
      achievements= ""
      discovered= ""/>
      <Profile 
      name="test"
      imageId= ""
      altName= ""
      width= ""
      height= ""
      profession= ""
      awards= ""
      achievements= ""
      discovered= ""/>
    </div>
  );
}
