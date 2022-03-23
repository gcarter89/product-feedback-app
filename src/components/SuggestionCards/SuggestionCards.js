import SuggestionCard from "../SuggestionCard/SuggestionCard.js";

export default function SuggestionCards({ data }) {

    const children = data.map((elem, index) => {
        return (
            <SuggestionCard key={index} data={elem} />
        )
    })

    return (
        <>
            {children}
        </>
    )
}