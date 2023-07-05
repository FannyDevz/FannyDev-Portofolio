import { experience } from "@/utils/data";
import { mono, mont } from "@/utils/fonts";

export default function ExperienceItem({ currentExp }: any){
    const item = experience[currentExp];

    if (!item) {
        // Handle the case when 'experience[currentExp]' is undefined or null
        return <div>No data available for current experience.</div>;
    }

    return (
        <div className={`${mont.className} experience-title-isi`}>
            <div>
                <h3 className="text-2xl">{item.title}</h3>
                <p className={mono.className}>{item.date}</p>
            </div>
            <div>
                <p>{item.story}</p>
            </div>
        </div>
    );
};

