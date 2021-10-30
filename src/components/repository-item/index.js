

function RepositoryItem ({name, fullName, linkDoRepo}) {
    return <div>
        <h2>{name}</h2>
        <h4>full name:</h4>
        <a 
        href={linkDoRepo}
        taget="_blank"
        rel="noreferrer"
        >
            {fullName}
        </a>
    </div>
}

export default RepositoryItem