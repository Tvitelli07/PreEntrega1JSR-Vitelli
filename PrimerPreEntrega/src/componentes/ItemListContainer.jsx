export default function ItemListContainer({greeting,parrafo}) {
    return<>
    <section className="text-nowrap bg-body-secondary border">
    <h2 className="text-center">{greeting}</h2>
    <p  className="text-center">{parrafo}</p>
    </section>
    </>;
}
