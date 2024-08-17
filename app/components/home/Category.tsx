"use client"
const Category = () => {
    const categoryList = [
        {
            name: "Earring"
        },
        {
            name: "Bracelet"
        },
        {
            name: "Necklace"
        },
        {
            name: "Anklet"
        },
        {
            name: "Brooch"
        },
        {
            name: "Ring"
        },
        {
            name: "Charm"
        },
        {
            name: "Cufflink"
        },

        {
            name: "Tiara"
        },



    ]
    return (
        <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto ">
            {categoryList.map((category, index) => (
                <div className="border text-slate-700 rounded-full min-w-[120px] flex items-center justify-center cursor-pointer flex-1 px-4 py-2 text-center" key={index}>{category.name}</div>
            ))}
        </div>
    );
};

export default Category;