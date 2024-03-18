import withFancyText from "./ReUseCom"

const TestComp=(props)=>{
    console.log('props',props)
    return(
        <div>
            hello {props.name}
        </div>
    )
}
export default withFancyText(TestComp)