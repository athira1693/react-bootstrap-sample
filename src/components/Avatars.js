import React from 'react'
import { Image } from 'react-bootstrap'
import '../scss/avatar.scss'

export default function Avatars({ profiles, size }) {
    return (
        <div class="avatars" >
            {profiles.map(profile => (
                <span id={profile.id} className={`avatar ${size}`}>
                    <Image src={profile.image} />
                </span>
            ))}
        </div>
    )
}
