export default async function Products({params}: {params: {id : string}}){
    const {id} = await params;
  return (
    <h2 className="min-h-[50vh]  text-center">
      This is Product {id}
    </h2>
  )
}


