import React, { useState } from 'react'
import ContestantHead from "components/Bachelor/ContestantHead"
import { ModalProvider, Modal } from "components/_ui/Modal/Modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './ContestantPreview.scss'

const ContestantPreview = ({ info, name, onClick }) => {



    return (
        <div className="ContestantPreview" onClick={onClick}>
            <ContestantHead name={name} />
            <div className="ContestantPreview__name">
                {name}, {info.age}
            </div>
            <div className="ContestantPreview__occupation">
                {info.occupation}
            </div>
            <div className="ContestantPreview__location">
                <FontAwesomeIcon className="" icon={faMapMarkerAlt} /> {info.location}
            </div>
        </div>
    )
}

export default ContestantPreview;
