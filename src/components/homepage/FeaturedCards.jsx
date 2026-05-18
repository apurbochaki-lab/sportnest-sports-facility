import SportsCard from "./SportsCard";

const FeaturedCards = async () => {

    const res = await fetch(`${process.env.NEXT_EXPRESS_SERVER}/featured`);
    const sports = await res.json();
    // console.log(sports)

    return (
        <section className="bg-[#fefae0] p-5 pt-20 pb-20">
            <div className="container mx-auto">
                <h2 className="text-center text-5xl font-bold mb-8">Featured Facilities</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        sports.map(sport => <SportsCard key={sport._id} sport={sport} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedCards;