
import React, { useState } from 'react';


const initialData = [
{
    'id': 1,
    'title': 'About',
    'content': "With a population of about 2 million, Almaty is Kazakhstan largest city. From 1929 to 1997, it was its capital city."
}, 
{
    'id': 2,
    'title': 'Etymology',
    'content': "The name comes from алма, the Kazakh word for \"apple\" and is often translated as \"full of apples\". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple."
},
{
    'id': 3,
    'title': 'Science',
    'content': "With a population of about 2 million, Almaty is Kazakhstan largest city. From 1929 to 1997, it was its capital city."
}]

function Panel({id, sectionHeading, children, isActive = false, onPanelClick}) {

    return (
        <section key={id+ 'section'} onClick={(e) => onPanelClick(e)}>
            <h2 id={id} >{sectionHeading}</h2>
            {   
                isActive ?
                <div >
                    {children} 
                </div>
                : null
            }
        </section>
    );
}


export default function App() {

    let [data, setData] = useState(initialData);
    let [activePanelId, setActivePanelId]= useState(1);

    function onPanelClick(e) {
        let selectedPanelId = e.target?.id || 0;
        setActivePanelId(selectedPanelId);
    }

    return (
        <div>
            <h1>Accordion Title</h1>
            {
               !!data && data.map((item) => <Panel 
                                                id={item.id}
                                                sectionHeading={item.title}
                                                children = {item.content}
                                                isActive = {activePanelId == item.id}
                                                onPanelClick = {onPanelClick}
                                            />)
            }

        </div>
    );

}