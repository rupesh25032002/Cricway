const Bowling = (props) =>{
  return(
    <>
     <h3 className="mt-5" >BOWLING STATS</h3>
    <table className="table2 bowling_table mt-2">
      <tr>
        <th>Bowling</th>
        <th>Matches</th>
        <th>Innings</th>
        <th>Wickets</th>
        <th>Eco</th>
        <th>Avg</th>
      </tr>
      <tr>
        <td>T20</td>
        <td>{props?.stats[0]?.t20?.bowling?.matches===undefined?"":props.stats[0].t20.bowling.matches}</td>
        <td>{props?.stats[0]?.t20?.bowling?.innings===undefined?"":props.stats[0].t20.bowling.innings}</td>
        <td>{props?.stats[0]?.t20?.bowling?.wickets===undefined?"":props.stats[0].t20.bowling.wickets}</td>
        <td>{props?.stats[0]?.t20?.bowling?.eco===undefined?"":props.stats[0].t20.bowling.eco}</td>
        <td>{props?.stats[0]?.t20?.bowling?.avg===undefined?"":props.stats[0].t20.bowling.avg}</td>
      </tr>
      <tr>
        <td>ODI</td>
        <td>{props?.stats[0]?.odi?.bowling?.matches===undefined?"":props.stats[0].odi.bowling.matches}</td>
        <td>{props?.stats[0]?.odi?.bowling?.innings===undefined?"":props.stats[0].odi.bowling.innings}</td>
        <td>{props?.stats[0]?.odi?.bowling?.wickets===undefined?"":props.stats[0].odi.bowling.wickets}</td>
        <td>{props?.stats[0]?.odi?.bowling?.eco===undefined?"":props.stats[0].odi.bowling.eco}</td>
        <td>{props?.stats[0]?.odi?.bowling?.avg===undefined?"":props.stats[0].odi.bowling.avg}</td>
      </tr>
      <tr>
        <td>TEST</td>
        <td>{props?.stats[0]?.test?.bowling?.matches===undefined?"":props.stats[0].test.bowling.matches}</td>
        <td>{props?.stats[0]?.test?.bowling?.innings===undefined?"":props.stats[0].test.bowling.innings}</td>
        <td>{props?.stats[0]?.test?.bowling?.wickets===undefined?"":props.stats[0].test.bowling.wickets}</td>
        <td>{props?.stats[0]?.test?.bowling?.eco===undefined?"":props.stats[0].test.bowling.eco}</td>
        <td>{props?.stats[0]?.test?.bowling?.avg===undefined?"":props.stats[0].test.bowling.avg}</td>
      </tr>
      <tr>
        <td>IPL</td>
        <td>{props?.stats[0]?.ipl?.bowling?.matches===undefined?"":props.stats[0].ipl.bowling.matches}</td>
        <td>{props?.stats[0]?.ipl?.bowling?.innings===undefined?"":props.stats[0].ipl.bowling.innings}</td>
        <td>{props?.stats[0]?.ipl?.bowling?.wickets===undefined?"":props.stats[0].ipl.bowling.wickets}</td>
        <td>{props?.stats[0]?.ipl?.bowling?.eco===undefined?"":props.stats[0].ipl.bowling.eco}</td>
        <td>{props?.stats[0]?.ipl?.bowling?.avg===undefined?"":props.stats[0].ipl.bowling.avg}</td>
      </tr>
      </table>
    </>
  )
}

export default Bowling