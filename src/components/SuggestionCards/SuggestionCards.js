import SuggestionCard from "../SuggestionCard/SuggestionCard.js";

export default function SuggestionCards({ data }) {
    if (!data) {
        return (
            <h1>Poop</h1>
        )
    }
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