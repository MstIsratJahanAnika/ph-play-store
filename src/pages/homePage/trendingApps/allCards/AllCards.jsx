import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const AllCards = ({ app }) => {

    const { image, title, id, downloads, ratingAvg } = app;

    return (
        <Link key={id} to={`/apps/${id}`} className="container mx-auto my-10">
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img src={image} alt={title} className="w-auto h-[200px]"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <span className="flex justify-between items-center gap-4">
                        <p className="flex grow-0 items-center gap-2 bg-green-50 text-green-500  py-1 px-2 font-semibold rounded-md">
                            <MdOutlineFileDownload />
                            {downloads}
                        </p>

                        <p className="flex grow-0 items-center gap-2 bg-orange-50 text-orange-500 py-1 px-2 font-semibold rounded-md">
                            <FaStar />
                            {ratingAvg}
                        </p>
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default AllCards;