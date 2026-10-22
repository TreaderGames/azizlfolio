import * as React from "react"

export default function CardContent(props) {
    return (<div>
                <div id={props.cardTitle} className="text-2xl primary-text">
                    {props.cardTitle}
                </div>

                <div className="text-2xl font-bold pt-1 paragraph-color-text">
                    {props.cardSubTitle}
                </div>

                <div className="text-lg font-bold pt-1 paragraph-color-text">
                    {props.cardDate}
                </div>

                <div className="text-xl pt-3 paragraph-text">
                    {props.cardDataType === "list" ? (
    <>
                    {console.log("IF branch: Rendering bullet list", {
                        cardDataType: props.cardDataType,
                        cardData: props.cardData
                    })}
                    <ul className="list-disc list-inside">
                    {props.cardData.split("\n").filter(Boolean).map((item, index) => (
                    <li key={index}>{item}</li>
            ))}
        </ul>
    </>
) : (
    <>
        {console.log("ELSE branch: Rendering plain text", {
            cardDataType: props.cardDataType,
            cardData: props.cardData
        })}
        {props.cardData}
    </>
)}
            </div>     
            </div>
    )
}