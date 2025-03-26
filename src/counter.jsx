export default function Counter(){
    const counterStyle ={
        border: '2px solid green',
        borderRadius: '20px'
    }
    return (
        <div style={counterStyle}>
            <h2>Count:</h2>
            <button>Add</button>
        </div>
    )
}