import {peopleData} from "./data/js"

function Item({person}) {
    return (
                <li key={person.id}>
                    {person.name} + `and profession is ` {person.profession}
                </li>
            );
}

function SplitList({peopleData}) {

    if(Array.isArray(peopleData) && peopleData.length !== 0 ) {
      
        let MathematiciansList = [];
        let restProfessions = [];

        peopleData.filter((person)=> {

            if(person?.profession === 'mathematician') {
                MathematiciansList.push(<Item person={person} />);
            } else {
                restProfessions.push(<Item person={person} />);
            }
        });

            return(
                <>
                    <h1>Mathematicians</h1>
                    <ul>
                        {MathematiciansList}
                    </ul>
                    <h1>All other Professions</h1>
                    <ul>
                        {restProfessions}
                    </ul>
                </>
 
            );
    }
}