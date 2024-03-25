
function Item({isPacked, name}) {
    return(
        <li>
            {!!isPacked ? (
                <del>
                    {name} {isPacked && '#' }
                </del>
                
            ) :(
                name
            )}
        </li>
    );
}

function Item3({isPacked, name}){

  return isPacked ? (
                        <li>
                            {name}
                        </li>
                    ) : 
                    (
                        <del>
                            {name + 'X' }
                        </del>
                    );
}

function Item2({isPacked, name}) {
   let itemContent = null;

   if(isPacked) {
    itemContent = (
        <del>
            {name + '^'}
        </del>
    );
   } else {
    itemContent = (
        <del>
            {name + '^'}
        </del>
    );
   }

   return(
    <div>
        {itemContent}
    </div>
   );

}

export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
}

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

function ItemList(people) {
    let itemContent = null;

    let listArray = !!people && Array.isArray(people) 
                       && people.length !== 0 ? people : null;

    if(!!listArray) {
        itemContent = listArray.map((item) =>{
            <li>{item}</li>
           });
    }

    return(
        <ul>
            {itemContent}
        </ul>
    );

}

const persons = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  function displayProfession({persons, requiredProfession}) {
    let filteredPerson = persons.filter((person) => {
        return person.profession === requiredProfession;
    });

   let result = filteredPerson.map((person) => {
        return <li key={person.name}>{person.name}</li>
    });

    return (
        <ul>
            {result}
        </ul>
    );
  }


  