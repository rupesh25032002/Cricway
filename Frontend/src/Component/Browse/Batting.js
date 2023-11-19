const Batting = (props) =>{
  return(
    <>
     <h3 className="mt-5" >BATTING STATS</h3>
    <table className="table2 batting_table mt-2">
      <tr>
        <th>Batting</th>
        <th>Matches</th>
        <th>Innings</th>
        <th>Runs</th>
        <th>Avg</th>
        <th>HS</th>
      </tr>
      <tr>
        <td>T20</td>
        <td>{props?.stats[0]?.t20?.batting?.matches===undefined?"":props.stats[0].t20.batting.matches}</td>
        <td>{props?.stats[0]?.t20?.batting?.innings===undefined?"":props.stats[0].t20.batting.innings}</td>
        <td>{props?.stats[0]?.t20?.batting?.runs===undefined?"":props.stats[0].t20.batting.runs}</td>
        <td>{props?.stats[0]?.t20?.batting?.avg===undefined?"":props.stats[0].t20.batting.avg}</td>
        <td>{props?.stats[0]?.t20?.batting?.highest===undefined?"":props.stats[0].t20.batting.highest}</td>
      </tr>
      <tr>
        <td>ODI</td>
        <td>{props?.stats[0]?.odi?.batting?.matches===undefined?"":props.stats[0].odi.batting.matches}</td>
        <td>{props?.stats[0]?.odi?.batting?.innings===undefined?"":props.stats[0].odi.batting.innings}</td>
        <td>{props?.stats[0]?.odi?.batting?.runs===undefined?"":props.stats[0].odi.batting.runs}</td>
        <td>{props?.stats[0]?.odi?.batting?.avg===undefined?"":props.stats[0].odi.batting.avg}</td>
        <td>{props?.stats[0]?.odi?.batting?.highest===undefined?"":props.stats[0].odi.batting.highest}</td>
      </tr>
      <tr>
        <td>TEST</td>
        <td>{props?.stats[0]?.test?.batting?.matches===undefined?"":props.stats[0].test.batting.matches}</td>
        <td>{props?.stats[0]?.test?.batting?.innings===undefined?"":props.stats[0].test.batting.innings}</td>
        <td>{props?.stats[0]?.test?.batting?.runs===undefined?"":props.stats[0].test.batting.runs}</td>
        <td>{props?.stats[0]?.test?.batting?.avg===undefined?"":props.stats[0].test.batting.avg}</td>
        <td>{props?.stats[0]?.test?.batting?.highest===undefined?"":props.stats[0].test.batting.highest}</td>
      </tr>
      <tr>
        <td>IPL</td>
      <td>{props?.stats[0]?.ipl?.batting?.matches===undefined?"":props.stats[0].ipl.batting.matches}</td>
        <td>{props?.stats[0]?.ipl?.batting?.innings===undefined?"":props.stats[0].ipl.batting.innings}</td>
        <td>{props?.stats[0]?.ipl?.batting?.runs===undefined?"":props.stats[0].ipl.batting.runs}</td>
        <td>{props?.stats[0]?.ipl?.batting?.avg===undefined?"":props.stats[0].ipl.batting.avg}</td>
        <td>{props?.stats[0]?.ipl?.batting?.highest===undefined?"":props.stats[0].ipl.batting.highest}</td>
      </tr>
      </table>
    </>
  )
}

export default Batting