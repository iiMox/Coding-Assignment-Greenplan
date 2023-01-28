import "./Table.css";

const Table = ({ head, body, type }) => {
    return (
        <table>
            <thead>
                <tr>
                    {head.map((elt, index) => {
                        return <th key={index + 1}>{elt}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {body.map((elt, index) => {
                    return (
                        <tr
                            style={{
                                cursor: `${type === "trip" ? "pointer" : ""}`,
                            }}
                            key={index}
                        >
                            {Object.keys(elt).map((key, i) => {
                                if (key !== "extra")
                                    return <td key={i + 1}>{elt[key]}</td>;
                            })}
                            {type === "trip" ? (
                                <td className='hidden'>
                                    <div className='left'>
                                        {Object.keys(elt.extra).map(
                                            (extraKey, i) => {
                                                return (
                                                    <span>
                                                        <span
                                                            style={{
                                                                fontWeight:
                                                                    "500",
                                                            }}
                                                        >{`${extraKey}: `}</span>
                                                        {elt.extra[extraKey]}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                    <div className='right'></div>
                                </td>
                            ) : (
                                <></>
                            )}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
