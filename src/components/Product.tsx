
export default function Product() {
  return (
    <div className="">
      <h1 className="flex justify-center p-10 text-5xl font-serif">Testing</h1>
        <div className="w-[320px] gap-y-5">
          <div className="form-control w-full max-w-xs">
            <h2 className="text-xl">Product Description</h2>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex gap-5 my-5">
            <div className="form-control w-full max-w-xs">
              <h2 className="text-xl">Quantity</h2>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <select className="select select-bordered w-[50%] max-w-xs my-7">
              <option disabled selected>
                Unit
              </option>
              <option>LT</option>
              <option>BOT</option>
              <option>GAL</option>
              <option>PCS</option>
              <option>PAIL</option>
              <option>LOT</option>
              <option>KG</option>
            </select>
            <div className="form-control w-full max-w-xs">
              <h2 className="text-xl">Price</h2>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="my-5 flex">
            <h2 className="text-2xl w-full font-serif">Total: </h2>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
  );
}
