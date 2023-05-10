import React, { useState } from 'react'
import SelectionField from './SelectionField/SelectionField'
import DatePickerField from './DatePickerField/DatePickerField'
import InputField from './InputField/InputField'
const SelectionBox = () => {
    const buildingOptions = [
        { value: "A", label: "Башня А" },
        { value: "B", label: "Башня Б" }
    ]

    const [building, setBuilding] = useState(null)
    const [stage, setStage] = useState(null)
    const [room, setRoom] = useState(null)
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState(new Date())
    const handleBuildingChange = (event) => {
        setBuilding(event.target.value);
    }

    const handleStageChange = (event) => {
        setStage(event.target.value);
    }

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    }

    return (
        <div id='selectionBox'>
            <ul className='list-group'>
                <li className="list-group-item">
                    <SelectionField options={buildingOptions}
                        onOptionChange={handleBuildingChange}
                        disabledOptionName={"Building"} />
                </li>
                <li className="list-group-item">
                    <SelectionField options={Array.from({ length: 25 }, (_, i) => {
                        return { label: i + 3, value: i + 3 }
                    })
                    }
                        onOptionChange={handleStageChange}
                        disabledOptionName={"Stage"} />
                </li>
                <li className="list-group-item">
                    <SelectionField options={Array.from({ length: 10 }, (_, i) => {
                        return { label: i + 1, value: i + 1 }
                    })
                    }
                        onOptionChange={handleRoomChange}
                        disabledOptionName={"Room"} />
                </li>
                <li className="list-group-item">
                    Выберите дату и время
                    <DatePickerField handleChange={setDate} />
                </li>
                <li className="list-group-item">
                    <InputField />
                </li>
                <li className="list-group-item align-items-center">
                    <button className="btn btn-outline-success me-5">
                        Отправить
                    </button>
                    <button className="btn btn-outline-danger ">
                        Очистить
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SelectionBox