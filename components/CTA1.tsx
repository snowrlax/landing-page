export const StudentFeed = () => {
    return (
        <div className="min-h-96  bg-slate-200 flex flex-col justify-center ">
            <div className="flex justify-center">
                <div className="md:w-8/12 md:flex">
                    <div className="px-12">
                        <h2 className="mb-6 text-2xl font-semibold">QS Impact Scholarships</h2>
                        <p className="text-justify mb-4">Attend a QS event and you’ll be eligible to apply for a
                            prestigious QS ImpACT scholarship. You could be selected
                            as one of the incredible students we support to pursue their
                            academic goals
                        </p>
                        <button className="btn btn-primary rounded-full">Apply for QS Scholarship</button>

                    </div>
                    <div className="card w-64 bg-base-100 shadow-xl rounded-none">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        {/* <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}