import CartWidget from "./CartWidget";

export default function NavBar() {
    return<>
    <div>
    <nav className="d-flex justify-content-around btn-group btn-group-lg my-5 bg-dark-subtle" role="group" aria-label="Large button group">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GcHhdBU8bSNURzyHXSuTRezGcXi6q2hGCA&s" alt="NeilIndumentaria"/>
        <button type="button" class="btn btn-outline-primary" >Predas Superiores</button>
        <button type="button" class="btn btn-outline-primary" > Prendas Inferiores</button>
        <button type="button" class="btn btn-outline-primary" >Todos los Productos</button>
        
        <CartWidget/>
    </nav>
    </div>
    </>;
}

