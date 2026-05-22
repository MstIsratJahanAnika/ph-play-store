
const Stats = () => {
    return (
        <div className="bg-purple-500 text-center text-white py-20">
            <h2 className="text-5xl font-bold mb-10">Trusted by Millions, Built for You</h2>

            <div className="flex gap-6 w-9/12 mx-auto justify-around items-center">
                <div>
                    <p>Total Downloads</p>
                    <h3 className="font-extrabold text-[64px]">29.6M</h3>
                    <p>21% more than last month</p>
                </div>

                <div>
                    <p>Total Reviews</p>
                    <h3 className="font-extrabold text-[64px]">906K</h3>
                    <p>46% more than last month</p>
                </div>

                <div>
                    <p>Active Apps</p>
                    <h3 className="font-extrabold text-[64px]">132+</h3>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;