import React, { useState, useEffect} from "react";
import axios from "axios";

// Cunstruct the div object
function RepoObject({name, html_url, login, description, language, avatar_url, user_url}) {

    return (
        <div className="card-container">
            <div className="card-body">
                <div className="card-text">
                    <a>{name}</a>
                    <p>{description}</p>
                </div>
            </div>
            <div className="card-footer">
                <a id="git-more" target="_blank" href={html_url}>More Info</a>
                <a id="git-name" href={user_url} target="_blank">{login}</a>
                <a id="git-language">{language != undefined ? language : "undefined"}</a>
            </div>
        </div>
    )

}

export default RepoObject;