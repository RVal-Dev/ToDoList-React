import { useState } from "react";

export default function Task({task}) {



    return (<li>
                <p>{task}</p>
                 <button>delete</button>
        </li>
    )
}