import { Children } from "react/cjs/react.production.min";



function Card({children}) {
    return(
    <div className="card">
        <div className="card-content">
          {children}
        </div>
    </div>
    );
}

export default function Profile() {
    return (
      <div>
        <Card>
            <h1>Photo</h1>
            <img
              className="avatar"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}/>
        </Card>
        <Card>
            <h1>About</h1>
            <p>This is Asif Shaik</p>
        </Card>
       </div>
    );
}
  