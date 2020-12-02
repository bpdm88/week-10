const Tags = ({ tags }) => (
    <>
        {tags.map((tag) => (
            <span key={tag} className="badge badge-primary">
                {tag}
            </span>
        ))}
    </>
);

export default Tags;
