function BedRoom(props){
  return(
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      Bedroom {props.bedNum}
    </div>
  )
}

export default BedRoom