export default async function Products({params}: {params: {id : string}}){
    const {id} = await params;
  return (
    <h2>
      This is Product {id}
    </h2>
  )
}


