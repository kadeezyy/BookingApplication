import React, { useState } from 'react'
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
    const [stage, setStage] = useState(null)
    const [room, setRoom] = useState(null)
    const [date, setDate] = useState(new Date())
    const [comment, setComment] = useState(null)

    const handleBuildingChange = (event) => {
        setBuilding(event.target.value);
    }

    const handleStageChange = (event) => {
        setStage(event.target.value);
    }

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const validateFields = () => {
        if (building == null) {
            console.log(document.querySelector('#building'))
            document.getElementById("building").style.borderColor = "red"
            return false
        }

        return true;
    }

    const handleSubmit = () => {
        if (!validateFields()) {
            return
        }
        console.log(building);
        console.log(stage);
        console.log(room);
        console.log(date.toJSON());
        console.log(comment)
    }


    /**
        @todo: need to add footer and handling fields 
    **/

    return (
        <div id='selectionBox'>
            <ul className='list-group' id="main-selection-list">
                <li className="list-group-item">
                    <div className="container" id="building">
                        Башня
                        <SelectionField options={buildingOptions}
                            onOptionChange={handleBuildingChange}
                            disabledOptionName={"Building"}
                        />
                    </div>

                </li>
                <li className="list-group-item">
                    <div className="container" id="stage">
                        Этаж
                        <SelectionField options={stages}
                            onOptionChange={handleStageChange}
                            disabledOptionName={"Stage"}
                        />
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="container" id="room">
                        Номер переговорной комнаты
                        <SelectionField options={rooms}
                            onOptionChange={handleRoomChange}
                            disabledOptionName={"Room"}
                        />
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="container" id="date">
                        Выберите дату и время
                        <DatePickerField handleChange={setDate}
                        />
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="container" id="comment">
                        Оставьте комментарий
                        <InputField handleCommentChange={handleCommentChange}/>
                    </div>
                </li>
                <li className="list-group-item align-items-center">
                    <div className="control-panel">
                        <button className="btn btn-success me-5"
                            onClick={handleSubmit}>
                            Отправить
                        </button>
                        <button className="btn btn-outline-danger ">
                            Очистить
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SelectionBox