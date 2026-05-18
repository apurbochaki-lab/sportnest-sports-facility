import Marquee from "react-fast-marquee";
import { SiAdidas, SiNike, SiPuma, SiReebok, SiUnderarmour } from "react-icons/si";

const RunningText = () => {

    const sponsors = [
        { id: 1, name: "Nike", logo: <SiNike /> },
        { id: 2, name: "Adidas", logo: <SiAdidas /> },
        { id: 3, name: "Puma", logo: <SiPuma /> },
        { id: 4, name: "Under Armour", logo: <SiUnderarmour /> },
        { id: 5, name: "Reebok", logo: <SiReebok /> },
        { id: 6, name: "Wilson" },
        { id: 7, name: "Yonex" },
        { id: 8, name: "Decathlon" },
        { id: 9, name: "New Balance" },
        { id: 10, name: "ASICS" },
        { id: 11, name: "Fila" },
        { id: 12, name: "Lotto" },
        { id: 13, name: "Mizuno" },
        { id: 14, name: "Head" },
        { id: 15, name: "Babolat" },
        { id: 16, name: "Li-Ning" },
        { id: 17, name: "Speedo" },
        { id: 18, name: "Spalding" },
        { id: 19, name: "Molten" },
        { id: 20, name: "Kipsta" },
        { id: 21, name: "Nivia" },
        { id: 22, name: "Slazenger" },
        { id: 23, name: "Prince" },
        { id: 24, name: "Umbro" },
        { id: 25, name: "Everlast" },
        { id: 26, name: "Rawlings" },
        { id: 27, name: "Mikasa" },
        { id: 28, name: "Kappa" },
        { id: 29, name: "Skechers" },
        { id: 30, name: "Brooks" },
    ];

    return (
        <section className="bg-[#fefae0]">
            <h2 className="text-center text-4xl font-bold py-5 text-[#283618] ">Our Sponsors</h2>
            <Marquee pauseOnHover={true} className="rounded-lg shadow-sm">
                {
                    sponsors.map(spon => <div key={spon.id} className=" bg-[#606c38]">
                        <div className=" p-5">
                            <span className=" bg-[#fefae0] px-5 py-3 rounded-xl">
                                {spon.name}
                            </span>
                        </div>

                    </div>)
                }
            </Marquee>
        </section>
    );
};

export default RunningText;