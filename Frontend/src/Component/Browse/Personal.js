const Personal = (props) =>{
  return(
   <>
    <h3 className="mb-4" >PERSONAL INFORMATION</h3>
      <table className="table1">
        <tr className="startrow">
          <th>NAME</th>
          <td>{props?.stats[0]?.name===undefined?"":props.stats[0].name}</td>
        </tr>
        <tr>
          <th>ROLE</th>
          <td>{props?.stats[0]?.role===undefined?"":props.stats[0].role}</td>
        </tr>
        <tr>
          <th>DATE OF BIRTH</th>
          <td>{props?.stats[0]?.born===undefined?"":props.stats[0].born}</td>
        </tr>
        <tr>
          <th>PLACE OF BIRTH</th>
          <td>{props?.stats[0]?.birthplace===undefined?"":props.stats[0].birthplace}</td>
        </tr>
        <tr>
          <th>BATTING STYLE</th>
          <td>{props?.stats[0]?.battingstyle===undefined?"":props.stats[0].battingstyle}</td>
        </tr>
        <tr>
          <th>BOWLING STYLE</th>
          <td>{props?.stats[0]?.bowlingstyle===undefined?"":props.stats[0].bowlingstyle}</td>
        </tr>
      </table>
   </>
  )
}

export default Personal