import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center px-4 sm:my-16">
      <h1 className="mb-8 text-xl md:text-3xl text-stone-700 font-semibold ">
        The best Pizza.
        <br />
        <span className="text-yellow-500 text-sm md:text-base">

        Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser/>
    </div>
  );
}

export default Home;
