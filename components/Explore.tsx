export const ExploreComponent = () => {
    return <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
        <input type="text" placeholder="Study Destination" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Study Major" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-neutral btn-wide rounded-full">Explore</button>
        </div>
    </div>
}