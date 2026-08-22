export const TransactinItem = ({item}) => {

    return(
        <div>
            <div>
                <p>{item.description}</p>
                <p>{item.value}</p>
            </div>
            <div>
                {item.date}
            </div>
        </div>
    )
}