const Newsletter = () => {
    return (
        <div className="mr-6 px-6 py-6 rounded-lg bg-black">
            <h3 className="capitalize text-s font-shadow text-white">
                SIGN UP FOR NEWSLETTER!
            </h3>
            <div className="mt-2 flex flex-col text-black">
                <input
                    className="border rounded-lg border-black mt-4 p-2 opacity-100 font-raleway bg-gray-100"
                    placeholder="Name"
                    type="text"
                />
                <input
                    className="border rounded-lg border-black mt-4 p-2 opacity-100 font-raleway bg-gray-100"
                    placeholder="E-mail"
                    type="text"
                />
                <button className="mt-4 bg-white text-black font-raleway rounded-lg py-2 cursor-pointer hover:bg-orange-400">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Newsletter;