import Image from "next/image"


export const Card = () => {
    return <div className="card w-86 bg-base-100 shadow-xl mt-4">
        <figure><Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            QS World University Rankings 2024
                {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>Discover the top-performing universities around the world</p>
            <div className="card-actions justify-end">
                {/* <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div> */}
                <button className="btn btn-neutral btn-wide rounded-full">Explore</button>
            </div>
        </div>
    </div>
}