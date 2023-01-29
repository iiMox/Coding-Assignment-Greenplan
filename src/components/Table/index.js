import Map from "../Map";

import "./Table.css";

const Table = ({ head, body, type }) => {
    const onTripRowClick = (e) => {
        const row = e.parentElement;
        const hiddenData = row.lastChild;
        const rightContentHeight = hiddenData.lastChild.firstChild.offsetHeight;

        if (hiddenData.style.maxHeight === "0px")
            hiddenData.style.maxHeight = rightContentHeight + "px";
        else hiddenData.style.maxHeight = "0px";
    };

    return (
        <div className='table'>
            <div className='thead'>
                <div className='tr'>
                    {head.map((elt, index) => {
                        return (
                            <div
                                className='th'
                                key={index + 1}
                                style={{
                                    flex: `${type === "trip" ? "25%" : "20%"}`,
                                }}
                            >
                                {elt}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='tbody'>
                {body.map((elt, index) => {
                    return (
                        <div
                            className='tr'
                            style={{
                                cursor: `${type === "trip" ? "pointer" : ""}`,
                            }}
                            key={index}
                            onClick={(e) => {
                                if (type === "trip") onTripRowClick(e.target);
                            }}
                        >
                            {Object.keys(elt).map((key, i) => {
                                if (key !== "extra")
                                    return (
                                        <div
                                            className='td'
                                            key={i + 1}
                                            style={{
                                                flex: `${
                                                    type === "trip"
                                                        ? "25%"
                                                        : "20%"
                                                }`,
                                            }}
                                        >
                                            {elt[key]}
                                        </div>
                                    );
                            })}
                            {type === "trip" ? (
                                <div
                                    className='td hidden'
                                    style={{ maxHeight: "0" }}
                                >
                                    <div className='left'>
                                        {Object.keys(elt.extra).map(
                                            (extraKey, i) => {
                                                return extraKey !==
                                                    "startCoords" &&
                                                    extraKey !== "endCoords" ? (
                                                    <span key={i}>
                                                        <span
                                                            style={{
                                                                fontWeight:
                                                                    "500",
                                                            }}
                                                        >{`${extraKey}: `}</span>
                                                        {elt.extra[extraKey]}
                                                    </span>
                                                ) : (
                                                    ""
                                                );
                                            }
                                        )}
                                    </div>
                                    <div className='right'>
                                        <Map
                                            coords={[
                                                elt.extra.startCoords,
                                                elt.extra.endCoords,
                                            ]}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Table;
