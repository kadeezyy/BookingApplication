import React, { useState, useRef } from 'react'
import SelectionField from '../SelectionField/SelectionField'
import DatePickerField from '../DatePickerField/DatePickerField'
import InputField from '../InputField/InputField'
import "./SelectionBox.css"

const SelectionBox = () => {
    const buildingOptions = [
        { value: "A", label: "Башня А" },
        { value: "B", label: "Башня Б" }
    ]
    const rooms = Array.from({ length: 10 }, (_, i) => {
        return { label: i + 1, value: i + 1 }
    })

    const stages = Array.from({ length: 25 }, (_, i) => {
        return { label: i + 3, value: i + 3 }
    })

    const [building, setBuilding] = useState(null)
    const buildingRef = useRef(null)
    const [stage, setStage] = useState(null)
    const stageRef = useRef(null)
    const [room, setRoom] = useState(null)
    const roomRef = useRef(null)
    const [date, setDate] = useState(new Date())
    const [comment, setComment] = useState("")

    const handleBuildingChange = (event) => {
        setBuilding(event.target.value);
        delete_error_message("building")
    }

    const handleStageChange = (event) => {
        setStage(event.target.value);
        delete_error_message("stage")
    }

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
        delete_error_message("room")
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
        // delete_error_message("comment")
    }

    const delete_error_message = (id) => {
        let el = document.getElementById(id);
        if (el.childElementCount > 1) {
            el.lastChild.remove()
        }
    }

    const error_message = (id) => {
        let child = document.createElement('p')
        let parent = document.getElementById(id);
        if (parent.childElementCount > 1) {
            return
        }
        child.setAttribute('className', 'error-message')
        child.innerHTML = "Обязательное поле"
        child.style.color = 'red'
        parent.appendChild(child)
    }

    const validateFields = () => {
        if (building == null) {
            error_message('building')
            return false
        }
        if (stage == null) {
            error_message('stage')
            return false
        }
        if (room == null) {
            error_message('room')
            return false
        }
        if (date == null) {
            error_message('date')
            return false
        }
        return true;
    }

    const handleSubmit = () => {
        if (!validateFields()) {
            return
        }
        const data = JSON.stringify({
            building: building,
            stage: stage,
            room: room,
            date: date,
            comment: comment
        })
        console.log(data)
    }

    const handleClear = () => {
        if (buildingRef.current) {
            buildingRef.current.value = ""
            setBuilding(null)
        }
        if (stageRef.current) {
            stageRef.current.value = ""
            setStage(null)
        }

        if (roomRef.current) {
            roomRef.current.value = ""
            setRoom(null)
        }

        setDate(new Date())
        
        if (comment !== "") {
            setComment("")
        }
    }

    return (
        <div id='selectionBox'>
            <ul className='list-group' id="main-selection-list">
                <li className="list-group-item">
                    <div className="container" id="building">
                        Башня
                        <SelectionField options={buildingOptions}
                            onOptionChange={handleBuildingChange}
                            disabledOptionName={"Building"}
                            ref={buildingRef}
                        />
                    </div>

                </li>
                <li className="list-group-item">
                    <div className="container" id="stage">
                        Этаж
                        <SelectionField options={stages}
                            onOptionChange={handleStageChange}
                            disabledOptionName={"Stage"}
                            ref={stageRef}
                        />
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="container" id="room">
                        Номер переговорной комнаты
                        <SelectionField options={rooms}
                            onOptionChange={handleRoomChange}
                            disabledOptionName={"Room"}
                            ref={roomRef}
                        />
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="container" id="date">
                        Выберите дату и время
                        <DatePickerField handleChange={setDate}
                        selectedDate={date} 
                        />
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="container" id="comment">
                        Оставьте комментарий
                        <InputField handleCommentChange={handleCommentChange} value={comment} />
                    </div>
                </li>
                <li className="list-group-item align-items-center">
                    <div className="control-panel">
                        <button className="btn btn-success me-5"
                            onClick={handleSubmit}>
                            Отправить
                        </button>
                        <button className="btn btn-outline-danger"
                            onClick={handleClear}>
                            Очистить
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SelectionBox