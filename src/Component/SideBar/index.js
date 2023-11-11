import React from "react"
import classes from "./index.module.css"

const SideBar = ({ headColor, setHeadColor, bg, setBg, fromDate, setFromDate, toDate, setToDate, setFontColor,
    fontColor, setFontSize, fontSize, courseName, setCourseName, provider, setProvider, borders, setBorder,
    setContent, setForWhat, name, setName, content }) => {

    const bordersAvail = borders.map(border => border.id)

    return (
        <div className={classes.component1}>
            <div className={classes.button}>
                <ul className={classes.unordered_list}>
                    <li className={classes.BORDER}>
                        <select className={classes.dropdown} onChange={(e) => { setBorder(e.target.value) }}>
                            {
                                bordersAvail.map((border) => <option value={border}>Border {border}</option>)
                            }
                        </select>
                    </li>
                    <li className={classes.TITLE}>
                        <select className={classes.dropdown} onChange={(e) => { setForWhat(e.target.value) }}>
                            <option value="0">Excellence</option>
                            <option value="1">Achievement</option>
                            <option value="2">Appreciation</option>
                            <option value="3">Completion</option>
                            <option value="4">Recognition</option>
                            <option value="5">Training</option>
                            <option value="6">Retirement</option>
                            <option value="7">Internship</option>
                            <option value="8">Participation</option>
                        </select>
                    </li>
                    <li className={classes.BODY}>
                        <select className={classes.dropdown} onChange={(e) => {setContent(parseInt(e.target.value)) }}>
                            <option value="0">Content1</option>
                            <option value="1">Content2</option>
                            <option value="2">Content3</option>
                        </select>
                    </li>
                    {
                        content === 1 ?
                            <>
                                <li> <input id='CourseName' placeholder="CourseName" value={courseName} onInput={(e) => { setCourseName(e.target.value) }} /></li>
                                <li> <input id='Provider' placeholder="Provider" value={provider} onInput={(e) => { setProvider(e.target.value) }} /></li>
                            </>
                            : null
                    }

                    <li className={classes.NAME}>
                        <input id='fontSize' placeholder="Enter name" value={name} onInput={(e) => { setName(e.target.value) }} />
                    </li>

                    <li className={classes.NAME} >
                        Fontsize:
                        <input id='fontSize' placeholder="enter font size" value={fontSize} onInput={(e) => { setFontSize(e.target.value) }}  />
                    </li>

                    <li className={classes.DATE}>
                        <p style={{ color: "white" }}>From Date :</p>
                        <input type="date" value={fromDate} onChange={(e) => { setFromDate(e.target.value) }} />
                    </li>
                    <li className={classes.DATE}>
                        <p style={{ color: "white" }}>To Date :</p>
                        <input  type="date" value={toDate} onChange={(e) => { setToDate(e.target.value) }} />
                    </li>

                    <li className={classes.NAME} style={{marginTop:"12px"}}>
                        Content color :
                        <input type="color" id='fontColor' placeholder="enter font color" value={fontColor} onInput={(e) => { setFontColor(e.target.value) }} />
                    </li>

                    <li className={classes.NAME}>
                        Heading color :
                        <input type="color" id='fontColor' placeholder="enter head color" value={headColor} onInput={(e) => { setHeadColor(e.target.value) }} />
                    </li>

                    <li className={classes.Background_color} style={{marginTop:"15px"}}>
                    <span style={{ color: "white" }}>Background color :</span>
                        <input type="color" id='backgroundColor' placeholder="enter background color" value={bg} onInput={(e) => { setBg(e.target.value) }} />
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default SideBar